import { Module } from '@nestjs/common' ;
import { TypeOrmModule } from '@nestjs/typeorm' ;
import { Task } from './task.entity';
import { TasksService } from './tasks.services';

@Module({
    imports : [TypeOrmModule.forFeature([Task])],
    providers: [TasksService],
})
export class TasksModule {}