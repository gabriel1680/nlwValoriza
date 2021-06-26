export interface ICustomError 
{
    message: string;
}

export class CustomError extends Error
{
    constructor ({ message }: ICustomError)
    {
        super(message);
    }
}