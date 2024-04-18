import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
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
       try{
        console.log(task);
        return this.taskRepository.save(task);
       }catch(error){
         console.log(error);
       }
      }
    
      
      async update(id: string, taskData: Partial<Task>): Promise<Task> {
        await this.taskRepository.update(id, taskData as any);
        return this.taskRepository.findOne({ where: { _id: new ObjectId(id) } } ) ;
      }

      async assignToTeam(taskId: string, teamId: string): Promise<Task> {
        try {
          console.log(`Assigning task ${taskId} to team ${teamId}`);
          
           const task = await this.taskRepository.findOne({ where: { _id: new ObjectId(taskId) } });
           console.log('Retrieved task:', task);
          if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
          }
          
          task.teamId = teamId;
          const updatedTask = await this.taskRepository.save(task);
          console.log('Updated task:', updatedTask);
  
          return updatedTask;
        } catch (error) {
          console.error('Error assigning task to team:', error.message);
          throw error; 
        }
      }

      async findByAssignee(assignee: string): Promise<Task[]> {
        return this.taskRepository.find({ where: { assignee } });
      }

    }