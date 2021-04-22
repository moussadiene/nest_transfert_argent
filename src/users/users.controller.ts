import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

    }

    @Get()
    findAll(){
        return this.usersService.findAll();
    }
}
