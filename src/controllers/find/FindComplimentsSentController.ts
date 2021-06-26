import { Request, Response } from "express";
import FindComplimentsSentService from "@services/find/FindComplimentsSentService";

export default class FindComplimentsSentController
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        //@ts-ignore
        const { userId } = req;
        const compliments = await FindComplimentsSentService.execute(userId);

        return res.json(compliments);
    }
}