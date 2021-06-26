import { Request, Response } from "express";
import FindUserByQueryService from "@services/find/FindUserByQueryService";

export default class FindUserByQueryController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const result = await FindUserByQueryService.execute(req.query);
        return res.json(result);
    }
}