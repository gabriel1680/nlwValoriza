export class CustomError extends Error
{
    public code: number;

    constructor (message: string)
    {
        super(message);
    }
}

export class BadRequestError extends CustomError
{
    constructor (message: string)
    {
        super(message);
        super.code = 400;
    }
}

export class UnauthorizedError extends CustomError
{
    constructor (message: string)
    {
        super(message);
        super.code = 401;
    }
}