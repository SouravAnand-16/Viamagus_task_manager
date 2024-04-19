
import { Task } from 'src/tasks/task.entity';
import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';

@Entity()
export class Team {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @OneToMany(() => Task, task => task.assigneeTeam)
  tasks: Task[];
}

