
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {

  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async create(team: Team): Promise<Team> {
    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findOne(id: string): Promise<Team> {
    const team = await this.teamRepository.findOne({ where: { _id: new ObjectId(id) } });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  
  async remove(id: string): Promise<void> {
    const team = await this.findOne(id);
    await this.teamRepository.remove(team);
  }
}
