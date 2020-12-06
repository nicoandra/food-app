import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const mongoSettings = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`
const mongooseModule = MongooseModule.forRoot(mongoSettings, {connectionName: "default"})

@Module({
  imports: [mongooseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
