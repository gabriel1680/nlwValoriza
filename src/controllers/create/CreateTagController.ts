import { Request, Response } from "express";
import CreateTagService from "@services/create/CreateTagService";

export default class TagCreateCreateController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { name } = req.body;
        const tag = await CreateTagService.execute({ name });

        return res.status(201).json(tag);
    }
}