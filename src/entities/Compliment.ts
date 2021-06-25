import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
export class Compliment
{
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column()
    public user_sender: number;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    sender: User;

    @Column()
    public user_receiver: number;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    receiver: User;

    @Column()
    public tag_id: number;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    public message: string;

    @CreateDateColumn()
    public created_at: Date;
}
