
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.services';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.update(id, task);
  }
}
