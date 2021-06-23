import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("compleinces")
export class Compleince
{
    @PrimaryGeneratedColumn()
    public readonly id: number;
}
