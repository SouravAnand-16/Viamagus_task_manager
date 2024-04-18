
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Team {
  @Column({ primary: true })
  id: string;

  @Column()
  name: string;

  @Column()
  members: string[]; 
}

