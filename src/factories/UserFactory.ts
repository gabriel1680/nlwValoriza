import { User } from "../entities/User";

interface IUser
{
    name: string,
    email: string,
    password: string,
    isAdmin?: boolean;
}

export class UserFactory
{
    public static create({ name, email, password, isAdmin }: IUser): User
    {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.isAdmin = isAdmin;

        return user;
    }
}