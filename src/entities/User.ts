import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
export class User
{
    @PrimaryColumn()
    public readonly id: string;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Exclude()
    @Column()
    public password: string;

    @Column()
    public isAdmin: boolean;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

    constructor ()
    {
        if (!this.id)
            this.id = uuid();
    }
}
