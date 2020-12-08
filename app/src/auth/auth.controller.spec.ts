import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from './../users/users.service'
import { UsersModule } from './../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { rootMongooseTestModule, closeInMongodConnection } from '../../test/mongooseModule'

const usersServiceMock = {}

const jwtModule = JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '60s' },
})

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, rootMongooseTestModule(), jwtModule],
      controllers: [AuthController],
      providers: [AuthService]
    }).overrideProvider(UsersService).useValue(usersServiceMock).compile();

    controller = module.get<AuthController>(AuthController);
  });

  afterAll(async () => {
    await closeInMongodConnection()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
