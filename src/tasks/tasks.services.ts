import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
      @InjectRepository(Task)
      private taskRepository : Repository<Task>,
    ){}

    async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    async create(task: Task): Promise<Task> {
        return this.taskRepository.save(task);
      }
    
      async update(id: string, taskData: Partial<Task>): Promise<Task> {
        await this.taskRepository.update(id, taskData as any);
        return this.taskRepository.findOne({ where: { id } }) ;
      }
}