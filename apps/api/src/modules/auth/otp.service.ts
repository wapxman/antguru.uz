import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { RedisService } from '../../common';

const OTP_TTL = 300; // 5 минут
const COOLDOWN_TTL = 60; // 1 минута между отправками
const MAX_ATTEMPTS = 5;
const ATTEMPTS_TTL = 900; // 15 минут блока при переборе

@Injectable()
export class OtpService {
  constructor(
    private readonly redis: RedisService,
    private readonly config: ConfigService,
  ) {}

  async createCode(phone: string): Promise<{ code: string; cooldownSec: number }> {
    const cooldownKey = this.keys.cooldown(phone);
    const cooldown = await this.redis.get(cooldownKey);
    if (cooldown) {
      throw new HttpException('Код уже отправлен. Попробуйте позже.', HttpStatus.TOO_MANY_REQUESTS);
    }

    const devCode = this.config.get<string>('DEV_OTP_CODE');
    const nodeEnv = this.config.get<string>('NODE_ENV');
    const code = devCode && nodeEnv !== 'production' ? devCode : this.generate();

    await this.redis.setWithTtl(this.keys.code(phone), code, OTP_TTL);
    await this.redis.del(this.keys.attempts(phone));
    await this.redis.setWithTtl(cooldownKey, '1', COOLDOWN_TTL);

    return { code, cooldownSec: COOLDOWN_TTL };
  }

  async verifyCode(phone: string, code: string): Promise<void> {
    const attemptsKey = this.keys.attempts(phone);
    const attempts = Number((await this.redis.get(attemptsKey)) ?? 0);
    if (attempts >= MAX_ATTEMPTS) {
      throw new HttpException(
        'Слишком много попыток. Попробуйте через 15 минут.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    const stored = await this.redis.get(this.keys.code(phone));
    if (!stored) throw new UnauthorizedException('Код истёк или не был отправлен');

    if (stored !== code) {
      await this.redis.incr(attemptsKey);
      await this.redis.expire(attemptsKey, ATTEMPTS_TTL);
      throw new UnauthorizedException('Неверный код');
    }

    await this.redis.del(this.keys.code(phone));
    await this.redis.del(attemptsKey);
  }

  private generate(): string {
    // 4-значный код 0000–9999
    const n = Math.floor(Math.random() * 10000);
    return n.toString().padStart(4, '0');
  }

  private keys = {
    code: (phone: string) => `otp:code:${phone}`,
    cooldown: (phone: string) => `otp:cooldown:${phone}`,
    attempts: (phone: string) => `otp:attempts:${phone}`,
  };
}
