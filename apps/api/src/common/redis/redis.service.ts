import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client: Redis | null = null;

  constructor(private readonly config: ConfigService) {}

  onModuleInit(): void {
    const url = this.config.get<string>('REDIS_URL');
    if (!url) {
      this.logger.warn('REDIS_URL не задан — Redis не инициализирован. OTP/очереди работать не будут.');
      return;
    }
    this.client = new Redis(url, { maxRetriesPerRequest: null });
    this.client.on('error', (err) => this.logger.error(`Redis error: ${err.message}`));
  }

  async onModuleDestroy(): Promise<void> {
    await this.client?.quit();
  }

  getClient(): Redis {
    if (!this.client) {
      throw new Error('Redis не инициализирован. Установите REDIS_URL.');
    }
    return this.client;
  }

  async setWithTtl(key: string, value: string, ttlSeconds: number): Promise<void> {
    await this.getClient().set(key, value, 'EX', ttlSeconds);
  }

  async get(key: string): Promise<string | null> {
    return this.getClient().get(key);
  }

  async del(key: string): Promise<void> {
    await this.getClient().del(key);
  }

  async incr(key: string): Promise<number> {
    return this.getClient().incr(key);
  }

  async expire(key: string, ttlSeconds: number): Promise<void> {
    await this.getClient().expire(key, ttlSeconds);
  }
}
