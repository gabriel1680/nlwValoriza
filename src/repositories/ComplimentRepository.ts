import { AbstractRepository, EntityRepository } from "typeorm";
import { Compliment } from "@entities/Compliment";

interface ICompliment
{
    tagId: string,
    userSenderId: string,
    userReceiverId: string,
    message: string;
}

@EntityRepository(Compliment)
export default class ComplimentRepository extends AbstractRepository<Compliment>
{
    public async createAndSave({ tagId, userSenderId, userReceiverId, message }: ICompliment): Promise<Compliment>
    {
        const compliment = new Compliment();
        compliment.tag_id = tagId;
        compliment.user_sender = userSenderId;
        compliment.user_receiver = userReceiverId;
        compliment.message = message;

        return await this.manager.save(compliment);
    }

    public findAll(): Promise<Compliment[]>
    {
        return this.manager.find(Compliment);
    }

    public findById(id: number | string): Promise<Compliment>
    {
        return this.manager.findOne(Compliment, id);
    }

    public findByTagId(id: string): Promise<Compliment[]>
    {
        return this.manager.find(Compliment, { tag_id: id });
    }

    public findBySenderId(id: string): Promise<Compliment[]>
    {
        return this.manager.find(Compliment, { user_sender: id });
    }

    public findByReceiverId(id: string): Promise<Compliment[]>
    {
        return this.manager.find(Compliment, { user_receiver: id });
    }
}