import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EskizClient } from './eskiz.client';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly eskiz: EskizClient,
  ) {}

  async send(phone: string, message: string): Promise<void> {
    const email = this.config.get<string>('ESKIZ_EMAIL');
    const password = this.config.get<string>('ESKIZ_PASSWORD');

    // Dev-fallback: если креды не настроены, печатаем в лог.
    if (!email || !password) {
      this.logger.log(`[DEV SMS → ${phone}] ${message}`);
      return;
    }

    try {
      await this.eskiz.send(phone, message);
    } catch (err) {
      this.logger.error(`SMS не отправлено на ${phone}: ${(err as Error).message}`);
      throw err;
    }
  }
}
