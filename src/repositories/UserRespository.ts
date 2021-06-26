import { EntityRepository, AbstractRepository } from "typeorm";
import { User } from "@entities/User";
import Email from "@services/utils/Email";

export interface IUser
{
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}

@EntityRepository(User)
export default class UserRepository extends AbstractRepository<User>
{
    public async createAndSave({ name, email, password, isAdmin = false }: IUser): Promise<User>
    {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.isAdmin = isAdmin;

        return this.manager.save(user);
    }

    public findAll(): Promise<User[]>
    {
        return this.manager.find(User);
    }

    public findById(id: number | string): Promise<User>
    {
        return this.manager.findOne(User, id);
    }

    public findByEmail(email: string): Promise<User>
    {
        return this.manager.findOne(User, { email: email });
    }

    public findByName(name: string): Promise<User>
    {
        return this.manager.findOne(User, { name: name });
    }
}
