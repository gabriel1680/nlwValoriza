import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export interface IUser
{
    name: string;
    email: string;
    isAdmin?: boolean;
}

@Entity("users")
export class User
{
    @PrimaryGeneratedColumn()
    public readonly id: string;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @Column()
    public isAdmin: boolean;
    @CreateDateColumn()
    public created_at: Date;
    @UpdateDateColumn()
    public updated_at: Date;
}
