import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username);
        if(!user) {
          return null
        }
        return user;
    }

    async login(user: any) {
        const payload = { name: user.name };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }    
}
