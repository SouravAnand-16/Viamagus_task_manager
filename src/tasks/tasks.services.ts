import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, In, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Task } from './task.entity';
import { Team } from 'src/teams/team.entity';

@Injectable()
export class TasksService {
    constructor(
      @InjectRepository(Task)
      private taskRepository : Repository<Task>,
      @InjectRepository(Team)
      private readonly teamRepository: Repository<Team>, 
    ){}

    async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    async findOne(id: string): Promise<Task> {
      try {
        const task = await this.taskRepository.findOne({ where: { _id: new ObjectId(id) } });
        if (!task) {
          throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
      } catch (error) {
        throw new InternalServerErrorException(error.message);
      }
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
           const team = await this.teamRepository.findOne({ where: { _id: new ObjectId(teamId) } });
          if (!team) {
            throw new Error(`team with id ${teamId} not found`);
          }
          
          task.assigneeTeam = team;
          const updatedTask = await this.taskRepository.save(task);
          console.log('Updated task:', updatedTask);
  
          return updatedTask;
        } catch (error) {
          console.error('Error assigning task to team:', error.message);
          throw error; 
        }
      }

      async findByAssignee(assignee: string): Promise<Task[]> {
        return await this.taskRepository.find({ where: { assigneeTeam: { _id: new ObjectId(assignee) } } });
      }

      async updateTask(id: string, updatedTask: Partial<Task>): Promise<Task> {
        const task = await this.taskRepository.findOne({ where: { _id: new ObjectId(id) } });
        if (!task) {
          throw new NotFoundException('Task not found');
        }
        Object.assign(task, updatedTask);
        return await this.taskRepository.save(task);
      }
    }