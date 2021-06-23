import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import TagRepository from "../repositories/TagRepository";

export default class TagController 
{
    public async create(req: Request, res: Response): Promise<Response>
    {
        const { name } = req.body;
        const tagRepository = getCustomRepository(TagRepository);
        const tag = await tagRepository.createAndSave({ name: name, });

        return res.status(201).json(tag);
    }

    public async findById(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const tagRepository = getCustomRepository(TagRepository);
        const tag = await tagRepository.findById(id);

        return res.json(tag);
    }

    public async find(req: Request, res: Response): Promise<Response>
    {
        const tagRepository = getCustomRepository(TagRepository);
        const queryParams = req.query;
        const hasId = Object.keys(queryParams).indexOf('id') !== -1;

        if (hasId) {
            //@ts-ignore
            const tag = await tagRepository.findById(queryParams.id);
            return res.json(tag);
        }
        const hasName = Object.keys(queryParams).indexOf('name') !== -1;

        if (hasName) {
            const name = queryParams.name;
            //@ts-ignore
            const tag = await tagRepository.findByName(name);
            return res.json(tag);
        }

        const tags = await tagRepository.findAll();
        return res.json(tags);
    }
}