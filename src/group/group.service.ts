import { Injectable } from '@nestjs/common';
import { GroupRepository } from './group.repository';
import { Group } from './group.model';
import { GroupDTO } from './group.type';

@Injectable()
export class GroupService {
  constructor(private groupRepository: GroupRepository) {}

  findAll(): Promise<Group[]> {
    return this.groupRepository.findAll();
  }

  createGroup(groupDTO: GroupDTO): Promise<Group> {
    return this.groupRepository.createGroup(groupDTO);
  }

  updateGroup(id: string, groupDTO: GroupDTO): Promise<Group> {
    return this.groupRepository.updateGroup(id, groupDTO);
  }

  deleteGroup(id: string): Promise<Group> {
    return this.groupRepository.deleteGroup(id);
  }

  findById(id: string): Promise<Group> {
    return this.groupRepository.findById(id);
  }
}
