import { Request, Response } from "express";
import FindComplimentsReceivedService from "@services/find/FindComplimentsReceivedService";

export default class FindComplimentsReceivedController
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        //@ts-ignore
        const { userId } = req;
        const compliments = await FindComplimentsReceivedService.execute(userId);

        return res.json(compliments);
    }
}