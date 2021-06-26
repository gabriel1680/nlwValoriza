import { getCustomRepository } from "typeorm";
import { Tag } from "@entities/Tag";
import TagRepository from '@repositories/TagRepository';
import BadRequestError from "@requestErrors/client/BadRequestError";

export default class FindTagByIdService
{
    public static async execute(id: string): Promise<Tag> 
    {
        if (!id) throw new BadRequestError("Tag id is missing");

        const tagRepository = getCustomRepository(TagRepository);

        return await tagRepository.findById(id);
    }
}