import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from './../entities/user.entity'

export class UserDto {
    @IsNotEmpty() name: string
    @IsEmail() @IsNotEmpty() email: string

    public static from(partial: Partial<UserDto>) : UserDto {
        const dto = new UserDto()
        dto.name = partial.name;
        dto.email = partial.email;
        return dto;
    }

    public static fromEntity(entity: User) : UserDto {
        return this.from({
            name: entity.name,
            email: entity.email,
        })
    }
}
