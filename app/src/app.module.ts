import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoSettings = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`
const mongooseModule = MongooseModule.forRoot(mongoSettings)

@Module({
  imports: [CatalogModule, mongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
