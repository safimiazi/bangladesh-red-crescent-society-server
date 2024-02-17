/* eslint-disable prettier/prettier */
import { config } from 'dotenv';
config();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/uploads', express.static('uploads'));
  // Enable CORS for all routes
  app.enableCors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow sending cookies
  });

  await app.listen(3000);
}

bootstrap();
