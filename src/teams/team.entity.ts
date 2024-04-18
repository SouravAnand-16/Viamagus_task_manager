
import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';

@Entity()
export class Team {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;
}

