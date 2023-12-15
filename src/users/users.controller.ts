// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
      ) {}
    
      @Post('register')
      async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
      }
    
      @Post('login')
      async login(@Body() user: User): Promise<{ access_token: string }> {
        return this.authService.login(user);
      }

//   @Get()
//   findAll(): Promise<User[]> {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
//     return this.usersService.findOne(id);
//   }

//   @Post()
//   create(@Body() createUserDto: CreateUserDto): Promise<User> {
//     return this.usersService.create(createUserDto);
//   }

//   @Put(':id')
//   update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
//     return this.usersService.update(id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
//     return this.usersService.remove(id);
//   }
}



