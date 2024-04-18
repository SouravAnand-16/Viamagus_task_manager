
import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';

@Entity()
export class Team {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;
}

