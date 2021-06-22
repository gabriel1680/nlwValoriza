import { EntityRepository, AbstractRepository, Repository } from "typeorm";
import { Email } from "../database/Email";
import { User } from "../models/User";

@EntityRepository(User)
export class UserRepository extends Repository<User>
{
    public async createAndSave(name: string, email: Email, isAdmin: boolean = false): Promise<User>
    {
        const user = new User();
        user.name = name;
        user.email = email.address;
        user.isAdmin = isAdmin;

        // const userExists = await this.findByEmail(email);

        // if (userExists) {
        //     throw new Error("Endereço de email já cadastrado!");
        // }

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

    public findByEmail(email: Email): Promise<User>
    {
        return this.manager.findOne(User, { email: email.address });
    }

    public findByName(name: string): Promise<User>
    {
        return this.manager.findOne(User, { name: name });
    }
}
