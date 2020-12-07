import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    async login_validation(@Request() req, @Body() loginDto: LoginDto) {
        return this.login(req, loginDto);
        console.log(loginDto)
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('local'))
    async login(@Request() req, @Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }  
}
