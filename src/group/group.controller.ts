import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './group.model';
import { GroupDTO } from './group.type';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  findAll(): Promise<Group[]> {
    return this.groupService.findAll();
  }

  @Post()
  createGroup(@Body() body: GroupDTO): Promise<Group> {
    return this.groupService.createGroup(body);
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<Group> {
    return this.groupService.findById(id);
  }

  @Post('/:id')
  updateGroup(@Param('id') id: string, @Body() body: GroupDTO): Promise<Group> {
    return this.groupService.updateGroup(id, body);
  }
}
