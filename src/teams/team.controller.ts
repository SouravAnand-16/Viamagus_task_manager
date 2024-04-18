import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

    // @Get(':id')
    // findById(@Param('id') id:string): Promise<Team> {
    //     return this.teamService.findById(id);
    // }
}