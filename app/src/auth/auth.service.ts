import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDto } from '../users/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from './dto/login-response.dto';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<UserDto|null> {
        const user = await this.usersService.findByName(username);
        if(!user) {
          return null
        }
        return UserDto.fromEntity(user);
    }

    async getAccessToken(user: UserDto) : Promise<LoginResponseDto> {
        const payload = { name: user.name, email: user.email };
        return {
          accessToken: this.jwtService.sign(payload),
        };
      }    
}
