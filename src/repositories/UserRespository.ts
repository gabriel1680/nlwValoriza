import { EntityRepository, AbstractRepository, getCustomRepository } from "typeorm";
import { UserFactory } from "../factories/UserFactory";
import { User } from "../entities/User";

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
    public async createAndSave(userRequest: IUser): Promise<User>
    {
        const user = UserFactory.create(userRequest);
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
