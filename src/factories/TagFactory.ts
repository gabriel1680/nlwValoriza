import { Tag } from "../entities/Tag";

export class TagFactory
{
    public static create(name: string): Tag
    {
        const tag = new Tag();
        tag.name = name;

        return tag;
    }
}