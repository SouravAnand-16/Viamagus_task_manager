
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.services';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private  tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() task: Partial<Task>): Promise<Task> {
  //   return this.tasksService.update(id, task);
  // }

  @Put(':id/assign-to-team/:teamId')
  assignToTeam(@Param('id') taskId: string, @Param('teamId') teamId: string): Promise<Task> {
    console.log(`Inside taskController : teamid :${teamId} AND TaskId : ${taskId}`);
    return this.tasksService.assignToTeam(taskId, teamId);
  }

  @Get('assignee/:assignee')
  findByAssignee(@Param('assignee') assignee: string): Promise<Task[]> {
    return this.tasksService.findByAssignee(assignee);
  }
  
}
