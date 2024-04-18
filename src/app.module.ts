
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.modules';
import { ConfigModule } from '@nestjs/config';
import { TeamsModule } from './teams/team.module';
import { Task } from './tasks/task.entity'; 
import { Team } from './teams/team.entity'; 

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MongoURL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Task, Team], 
    }),
    TasksModule,
    TeamsModule
  ],
})
export class AppModule {}
