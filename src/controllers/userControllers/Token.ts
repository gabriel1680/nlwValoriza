import { compare } from "bcryptjs";
import { sign, SignOptions } from "jsonwebtoken";

export default class Token
{
    public key: string;

    public generateKey(payload: string | object | Buffer, secretKey: string, options?: SignOptions): string 
    {
        this.key = sign(payload, secretKey, options);
        return this.key;
    }
}