// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MongoURL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TasksModule,
  ],
})
export class AppModule {}

