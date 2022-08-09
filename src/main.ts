import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const logger = new Logger;
  await app.listen(3000);

  logger.log(`Servidor iniciado en la url: ${await app.getUrl() }`)
}
bootstrap();
