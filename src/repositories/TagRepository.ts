import { EntityRepository, AbstractRepository } from "typeorm";
import { Tag } from "@entities/Tag";

export interface ITag
{
    name: string;
}

@EntityRepository(Tag)
export default class TagRepository extends AbstractRepository<Tag>
{
    public async createAndSave({ name }: ITag): Promise<Tag>
    {
        const tag = new Tag();
        tag.name = name;

        return this.manager.save(tag);
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


