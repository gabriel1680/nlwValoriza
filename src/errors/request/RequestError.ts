import { ICustomError, CustomError } from "../CustomError";

export interface IRequestError extends ICustomError
{
    code: number;
}

export class RequestError extends CustomError
{
    public code: number;

    constructor ({ code, message }: IRequestError)
    {
        super({ message });
        this.code = code;
    }
}