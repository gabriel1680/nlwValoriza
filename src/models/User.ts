import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Repository, UpdateDateColumn } from "typeorm";
import { Email } from "../database/Email";
import { UserRepository } from "../repositories/UserRespository";

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
