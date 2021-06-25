import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import TagRepository from "../../repositories/TagRepository";

export default class TagCreateController 
{
    public async create(req: Request, res: Response): Promise<Response>
    {
        const { name } = req.body;
        const tagRepository = getCustomRepository(TagRepository);
        const tag = await tagRepository.createAndSave({ name: name, });

        return res.status(201).json(tag);
    }
}