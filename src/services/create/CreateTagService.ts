import { getCustomRepository } from "typeorm";
import BadRequestError from "errors/request/client/BadRequestError";
import { Tag } from "@entities/Tag";
import TagRepository from "@repositories/TagRepository";

interface ITagRequest
{
    name: string;
}

export default class CreateTagService
{
    public static async execute({ name }: ITagRequest): Promise<Tag>
    {
        if (!name) throw new BadRequestError("Invalid tag name");

        const repository = getCustomRepository(TagRepository);

        const tagExists = await repository.findByName(name);

        if (tagExists) throw new BadRequestError("Tag name already exists");

        return repository.createAndSave({ name });
    }
}