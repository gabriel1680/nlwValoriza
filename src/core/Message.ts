export class Message
{
    private status: string;
    private message: string;


    public blank(status: string, message: string): Message
    {
        this.status = status;
        this.message = message;
        return this;
    }

    public success(message: string): Message
    {
        this.status = "success";
        this.message = message;
        return this;
    }

    public error(message: string): Message
    {
        this.status = "error";
        this.message = message;
        return this;
    }

    public byException(err: Error): Message
    {
        this.status = err.name;
        this.message = err.message;
        return this;
    }

    public json(): string 
    {
        return JSON.stringify(this.build());
    }

    public build(): object
    {
        return {
            status: this.status,
            message: this.message
        };
    }

}