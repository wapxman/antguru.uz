import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../../common';
import type { JwtPayload } from '../../common';

import { OtpService } from './otp.service';
import { SmsService } from './sms/sms.service';

import type { UserRole } from '@antguru/types';

const OTP_MESSAGE = (code: string) => `antguru.uz: ваш код подтверждения ${code}. Никому не сообщайте этот код.`;

@Injectable()
export class AuthService {
  constructor(
    private readonly otp: OtpService,
    private readonly sms: SmsService,
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async sendCode(phone: string) {
    const { code, cooldownSec } = await this.otp.createCode(phone);
    await this.sms.send(phone, OTP_MESSAGE(code));
    return { sentAt: new Date().toISOString(), cooldownSec };
  }

  async verifyCode(phone: string, code: string) {
    await this.otp.verifyCode(phone, code);

    const user = await this.prisma.user.upsert({
      where: { phone },
      update: {},
      create: { phone },
    });

    return this.issueTokens(user.id, user.phone, user.roles);
  }

  async refresh(refreshToken: string) {
    const refreshSecret = this.config.get<string>('JWT_REFRESH_SECRET');
    if (!refreshSecret) throw new UnauthorizedException('Refresh секрет не настроен');
    let payload: JwtPayload;
    try {
      payload = await this.jwt.verifyAsync<JwtPayload>(refreshToken, { secret: refreshSecret });
    } catch {
      throw new UnauthorizedException('Невалидный refresh-токен');
    }
    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) throw new UnauthorizedException('Пользователь не найден');
    return this.issueTokens(user.id, user.phone, user.roles);
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { specialistProfile: true },
    });
    if (!user) throw new UnauthorizedException('Пользователь не найден');
    return user;
  }

  private async issueTokens(userId: string, phone: string, roles: UserRole[]) {
    const payload: JwtPayload = { sub: userId, phone, roles };
    const refreshSecret = this.config.get<string>('JWT_REFRESH_SECRET');
    const refreshExp = this.config.get<string>('JWT_REFRESH_EXPIRES_IN') ?? '30d';

    const accessToken = await this.jwt.signAsync(payload);
    const refreshToken = await this.jwt.signAsync(payload, {
      secret: refreshSecret,
      expiresIn: refreshExp,
    });

    return {
      accessToken,
      refreshToken,
      user: { id: userId, phone, roles },
    };
  }
}
