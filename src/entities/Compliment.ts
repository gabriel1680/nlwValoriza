import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("compliments")
export class Compliment
{
    @PrimaryColumn()
    public readonly id: string;

    @Column()
    public user_sender: string;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    sender: User;

    @Column()
    public user_receiver: string;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    receiver: User;

    @Column()
    public tag_id: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    public message: string;

    @CreateDateColumn()
    public created_at: Date;

    constructor ()
    {
        if (!this.id)
            this.id = uuid();
    }
}
