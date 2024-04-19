
import { Controller, Get, Post, Body, Put, Param  , UseGuards} from '@nestjs/common';
import { TasksService } from './tasks.services';
import { Task } from './task.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  taskRepository: any;
  constructor(private  tasksService: TasksService) {}

  @Get()
  //@UseGuards(JwtAuthGuard)
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
 // @UseGuards(JwtAuthGuard)
  create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.update(id, task);
  }

  @Put(':id/assign-to-team/:teamId')
  assignToTeam(@Param('id') taskId: string, @Param('teamId') teamId: string): Promise<Task> {
    console.log(`Inside taskController : teamid :${teamId} AND TaskId : ${taskId}`);
    return this.tasksService.assignToTeam(taskId, teamId);
  }

  @Get('assignee/:assignee')
  findByAssignee(@Param('assignee') assignee: string) {
    return this.tasksService.findByAssignee(assignee);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() updatedTask: Partial<Task>) {
    return await this.tasksService.updateTask(id, updatedTask);
  }
  
}
