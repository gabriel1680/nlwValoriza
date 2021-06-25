interface ICustomError 
{
    code: number;
    message: string;
}

export class CustomError extends Error
{
    public code: number;

    constructor ({ code, message }: ICustomError)
    {
        super(message);
        this.code = code;
    }
}

export class BadRequestError extends CustomError
{
    constructor (message: string)
    {
        super({
            code: 400,
            message: message
        });
    }
}

export class UnauthorizedError extends CustomError
{
    constructor (message: string)
    {
        super({
            code: 401,
            message: message
        });
    }
}