import { Request, Response } from "express";
import FindTagByIdService from "@services/find/FindTagByIdService";

export default class FindTagByIdController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const tag = await FindTagByIdService.execute(id);

        return res.json(tag);
    }
}