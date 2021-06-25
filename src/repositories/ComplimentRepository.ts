import { AbstractRepository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import ComplimentFactory from "../factories/ComplimentFactory";

interface ICompliment
{
    tagId: number,
    userSenderId: number,
    userReceiverId: number,
    message: string;
}

@EntityRepository(Compliment)
export default class ComplimentRepository extends AbstractRepository<Compliment>
{
    public async createAndSave(object: ICompliment): Promise<Compliment>
    {
        const compliment = ComplimentFactory.create(object);
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

    public findByMessage(message: string): Promise<Compliment>
    {
        return this.manager.findOne(Compliment, { message: message });
    }

    public findBySenderId(id: number): Promise<Compliment[]>
    {
        return this.manager.find(Compliment, { user_sender: id });
    }

    public findByReceiverId(id: number): Promise<Compliment[]>
    {
        return this.manager.find(Compliment, { user_receiver: id });
    }

    public findByTagId(id: number): Promise<Compliment[]>
    {
        return this.manager.find(Compliment, { tag_id: id });
    }
}