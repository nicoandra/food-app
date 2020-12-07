import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    name: string
    @IsNotEmpty()
    password: string
}
