import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupRepository } from './group.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './group.model';

@Module({
  controllers: [GroupController],
  providers: [GroupService, GroupRepository],
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  exports: [GroupService],
})
export class GroupModule {}
