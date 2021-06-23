import { EntityRepository, AbstractRepository } from "typeorm";
import { Factory } from "../factories/Factory";
import { ITag, Tag } from "../database/entities/Tag";
import { BadRequestError } from "../core/customErrors";

@EntityRepository(Tag)
export default class TagRepository extends AbstractRepository<Tag>
{
    public async createAndSave({ name }: ITag): Promise<Tag>
    {
        const Tag = Factory.createTag(name);

        if (!name) throw new BadRequestError("Nome inválido!");

        const tagExists = await this.findByName(name);

        if (tagExists) throw new BadRequestError("A informada já foi cadastrada!");

        return this.manager.save(Tag);
    }

    public findAll(): Promise<Tag[]>
    {
        return this.manager.find(Tag);
    }

    public findById(id: number | string): Promise<Tag>
    {
        return this.manager.findOne(Tag, id);
    }

    public findByName(name: string): Promise<Tag>
    {
        return this.manager.findOne(Tag, { name: name });
    }
}


