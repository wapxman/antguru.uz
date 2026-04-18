import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix('api');

  const origins = (config.get<string>('CORS_ORIGIN') ?? '*').split(',').map((s) => s.trim());
  app.enableCors({
    origin: origins.length === 1 && origins[0] === '*' ? true : origins,
    credentials: true,
  });

  const port = Number(config.get<string>('PORT') ?? 4000);
  await app.listen(port);
  Logger.log(`🚀 API на http://localhost:${port}/api`, 'Bootstrap');
}

bootstrap();
