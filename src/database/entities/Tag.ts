import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export interface ITag
{
    name: string;
}

@Entity("tags")
export class Tag
{
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column()
    public name: string;
    @CreateDateColumn()
    public created_at: Date;
    @UpdateDateColumn()
    public updated_at: Date;
}
