import { JwtPayload, sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";

export default class Token
{
    private _key: string;

    private _lastToken: string;

    constructor (token: string)
    {
        this._key = token;
    }

    public key(): string
    {
        return this._key;
    }

    public lastToken(): string
    {
        return this._lastToken;
    }

    public generate(payload: string | object | Buffer, options?: SignOptions): string 
    {
        this._lastToken = sign(payload, this._key, options);
        return this._lastToken;
    }

    public verify(supposedToken: string, options?: VerifyOptions): string | JwtPayload
    {
        return verify(supposedToken, this._key);
    }
}