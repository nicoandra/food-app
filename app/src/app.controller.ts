import { Controller, Get } from '@nestjs/common';
import { AppService, AppDescriptionInterface } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppDescriptionInterface {
    return this.appService.getAppDescription();
  }
}
