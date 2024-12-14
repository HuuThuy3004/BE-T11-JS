import { Body, Controller, Get, Post } from '@nestjs/common';
import { User, UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    getUsers() {
        return this.userService.getUser();
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

}
