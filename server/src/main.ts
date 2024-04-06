import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import firebaseConnection from './firebaseConnection';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  firebaseConnection();
};

bootstrap();
