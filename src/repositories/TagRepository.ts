import { EntityRepository, AbstractRepository } from "typeorm";
import { TagFactory } from "../factories/TagFactory";
import { Tag } from "../entities/Tag";
import { BadRequestError } from "../core/customErrors";

export interface ITag
{
    name: string;
}

@EntityRepository(Tag)
export default class TagRepository extends AbstractRepository<Tag>
{
    public async createAndSave({ name }: ITag): Promise<Tag>
    {
        const Tag = TagFactory.create(name);
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


