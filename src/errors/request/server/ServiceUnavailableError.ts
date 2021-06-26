import { RequestError } from "../RequestError";

export default class ServiceUnavailableError extends RequestError
{
    constructor (message: string)
    {
        super({
            code: 504,
            message: message
        });
    }
}