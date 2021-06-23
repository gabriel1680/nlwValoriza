import Email from "../database/types/Email";
import { User } from "../database/entities/User";
import { Tag } from "../database/entities/Tag";

export class Factory
{
    public static createUser(name: string, email: Email, isAdmin: boolean = false): User
    {
        const user = new User();
        user.name = name;
        user.email = email.address;
        user.isAdmin = isAdmin;

        return user;
    }

    public static createTag(name: string): Tag
    {
        const tag = new Tag();
        tag.name = name;

        return tag;
    }
}