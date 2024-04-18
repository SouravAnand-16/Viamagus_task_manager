import { Module } from '@nestjs/common' ;
import { TypeOrmModule } from '@nestjs/typeorm' ;
import { Task } from './task.entity';
import { TasksService } from './tasks.services';
import { TasksController } from './tasks.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule {}