import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamsController {
    constructor(private teamService : TeamService) {}

    @Post()
    create(@Body() team : Team): Promise<Team> {
        return this.teamService.create(team);
    }

    @Get()
    findAll(): Promise<Team[]> {
        return this.teamService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.teamService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.teamService.remove(id);
    }
}