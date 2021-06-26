import { Request, Response } from "express";
import FindTagByQueryService from "@services/find/FindTagByQueryService";


export default class FindTagByQueryController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const tagOrTags = await FindTagByQueryService.execute(req.query);
        return res.json(tagOrTags);
    }
}