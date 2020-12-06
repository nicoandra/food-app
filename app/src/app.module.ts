import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpCrudValidationFilter } from './http-crud-validation.filter'
import { AuthModule } from './auth/auth.module';

const mongoSettings = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`
const mongooseModule = MongooseModule.forRoot(mongoSettings)

const httpExceptionFilter = {
  provide: APP_FILTER,
  useClass: HttpCrudValidationFilter,
}

@Module({
  imports: [mongooseModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, httpExceptionFilter],
}) 
export class AppModule{}
