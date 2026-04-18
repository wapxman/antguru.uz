import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { type AxiosInstance } from 'axios';

import { RedisService } from '../../../common';

const BASE_URL = 'https://notify.eskiz.uz/api';
const TOKEN_KEY = 'eskiz:token';
const TOKEN_TTL = 60 * 60 * 24 * 25; // 25 дней (токен Eskiz живёт 30 дней)

@Injectable()
export class EskizClient {
  private readonly logger = new Logger(EskizClient.name);
  private readonly http: AxiosInstance = axios.create({ baseURL: BASE_URL });

  constructor(
    private readonly config: ConfigService,
    private readonly redis: RedisService,
  ) {}

  async send(phone: string, message: string): Promise<void> {
    const token = await this.getToken();
    const from = this.config.get<string>('ESKIZ_SENDER') ?? '4546';
    const mobilePhone = phone.replace(/\D/g, ''); // Eskiz ждёт цифры без +

    await this.http.post(
      '/message/sms/send',
      { mobile_phone: mobilePhone, message, from },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }

  private async getToken(): Promise<string> {
    const cached = await this.redis.get(TOKEN_KEY).catch(() => null);
    if (cached) return cached;

    const email = this.config.get<string>('ESKIZ_EMAIL');
    const password = this.config.get<string>('ESKIZ_PASSWORD');
    if (!email || !password) throw new Error('ESKIZ_EMAIL/ESKIZ_PASSWORD не настроены');

    const { data } = await this.http.post<{ data: { token: string } }>('/auth/login', {
      email,
      password,
    });
    const token = data.data.token;
    await this.redis.setWithTtl(TOKEN_KEY, token, TOKEN_TTL).catch((err) => {
      this.logger.warn(`Не смогли кэшировать Eskiz-токен: ${(err as Error).message}`);
    });
    return token;
  }
}
