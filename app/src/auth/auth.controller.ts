import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto'
import { PublicRoute } from 'src/public-route.decorator';
import { LoginResponseDto } from './dto/login-response.dto';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @PublicRoute()
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req) : Promise<LoginResponseDto> {
        return this.authService.getAccessToken(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }  
}
