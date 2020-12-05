import { Injectable } from '@nestjs/common';

export interface AppDescriptionInterface {
  title: String
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAppDescription() : AppDescriptionInterface {
    return {
      title: 'The Infinite Store'
    }
  }
}
