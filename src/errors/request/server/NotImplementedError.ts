import { RequestError } from "../RequestError";

export default class NotImplemetedError extends RequestError
{
    constructor (message: string)
    {
        super({
            code: 501,
            message: message
        });
    }
}
