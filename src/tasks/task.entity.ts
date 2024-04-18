import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Task {
    @ObjectIdColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    dueDate: Date;

    @Column()
    assignee: string;

    @Column()
    status: string;

    @Column()
    teamId: string; 
}
