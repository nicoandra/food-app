import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants, APP_GUARD } from './constants';
import { JwtAuthGuard } from './jwt-auth.guard'

const jwtAuthGuardProvider = {
  provide: APP_GUARD,
  useClass: JwtAuthGuard,
}

const jwtModule = JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '1800s' },
})

@Module({
  imports: [UsersModule, PassportModule, jwtModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, jwtAuthGuardProvider],
  controllers: [AuthController]
})
export class AuthModule {}
