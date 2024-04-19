import { Team } from 'src/teams/team.entity';
import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';

@Entity()
export class Task {
    @ObjectIdColumn()
    _id: ObjectId;
    
    @Column()
    description: string;

    @Column()
    dueDate: Date;

    @Column()
    status: string;

  
    @ManyToOne(() => Team)
    assigneeTeam: Team;

}
