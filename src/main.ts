import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ limit: '25mb' }));
  await app.listen(4000);
}
bootstrap();
