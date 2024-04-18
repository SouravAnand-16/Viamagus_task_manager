import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Task {
    @ObjectIdColumn()
    _id: ObjectId;
    
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
