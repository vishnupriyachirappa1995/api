import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({name:"workdays"})
export class Workdays{
    @PrimaryColumn({name:"id"})
    id:string;

    @Column({name:"day"})
    dayName:string;

    @Column({name:"day_index"})
    dayNum:string;

    @Column({name:"is_working_day"})
    isWorkingDay:boolean;

    
}