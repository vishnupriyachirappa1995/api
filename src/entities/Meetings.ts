import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({name:"meetings"})
export class Meetings{
    @PrimaryColumn({name:"id"})
    id:string;

    @Column({name:"title"})
    title:string;

    @Column({name:"start_date"})
    startDate:Date;

    @Column({name:"end_date"})
    endDate:Date;

    @Column({name:"repeat_type"})
    repeatType:string;

    @Column({name:"repeat_end_date"})
    repeatEndDate:Date;

    @Column({name:"repereat_end_interval"})
    repereatEndInterval:Number;

    @Column({name:"repeat_on"})
    repeatOn:string;

    @Column({name:"repeat_on_days"})
    repeatOnDays:string

    @Column({name:"description"})
    description:string;

    
}