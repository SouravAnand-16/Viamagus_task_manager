import { Entity , ObjectIdColumn , ObjectId , Column } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id : string ;

    @Column()
    username : string ;

    @Column()
    password : string ;
}