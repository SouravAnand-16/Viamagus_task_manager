import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';
import { Team } from './team.entity';

@Entity()
export class TeamMember {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

}
