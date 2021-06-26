import { Tag } from "@entities/Tag";
import TagRepository from "@repositories/TagRepository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

export default class FindTagByQueryService
{
    public static async execute(...queryParams: any): Promise<Tag | Record<string, any>>
    {
        const tagRepository = getCustomRepository(TagRepository);

        const hasId = Object.keys(queryParams).indexOf('id') !== -1;

        if (hasId)
            //@ts-ignore
            return await tagRepository.findById(queryParams.id);

        const hasName = Object.keys(queryParams).indexOf('name') !== -1;

        if (hasName)
            //@ts-ignore
            return await tagRepository.findByName(queryParams.name);

        return classToPlain(await tagRepository.findAll());
    }
}