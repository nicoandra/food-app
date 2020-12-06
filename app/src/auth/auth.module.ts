import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';


const jwtModule = JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '60s' },
})

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
