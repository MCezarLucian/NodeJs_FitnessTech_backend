import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserDTO } from './userDTO';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() body: UserDTO): Promise<User> {
    return this.userService.createUser(body);
  }

  @Get('/:username')
  findUserByUsername(@Param('username') username: string): Promise<User> {
    return this.userService.findUserByUsername(username);
  }

  @Post('/update/:username')
  updateUser(
    @Param('username') username: string,
    @Body() body: UserDTO,
  ): Promise<User> {
    this.userService.deleteUser(username);
    return this.userService.createUser(body);
  }

  @Post('/update/role/:username')
  updateUserRole(
    @Param('username') username: string,
    @Body() body: UserDTO,
  ): Promise<User> {
    // this.userService.deleteUser(username);
    return this.userService.updateUser(username, body);
  }

  @Post('/confirm/:id')
  confirmUser(@Param('id') id: string, @Body() user: UserDTO) {
    return this.userService.confirmUser(id, user);
  }
}
