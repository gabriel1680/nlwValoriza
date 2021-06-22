import { Request, Response } from "express";
import { Tag } from "../models/Tag";

export class TagController 
{
    public async handle(req: Request, res: Response)
    {
        //@ts-ignore
        const { name } = req.body;
        const tag = new Tag();
        tag.name = name;
        await tag.save(tag);

        return res.json(tag);
    }
}