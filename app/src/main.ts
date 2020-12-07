import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Order Food')
    .setDescription('The API')
    .setVersion('1.0')
    .addTag('food')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
