import { EntityRepository, AbstractRepository } from "typeorm";
import Email from "../database/types/Email";
import { Factory } from "../factories/Factory";
import { IUser, User } from "../database/entities/User";
import { BadRequestError } from "../core/customErrors";

@EntityRepository(User)
export default class UserRepository extends AbstractRepository<User>
{
    public async createAndSave({ name, email, isAdmin }: IUser): Promise<User>
    {
        const validEmail = new Email(email);

        const user = Factory.createUser(name, validEmail, isAdmin);

        if (!name) throw new BadRequestError("Nome inválido!");

        const emailExists = await this.findByEmail(validEmail.address);

        if (emailExists) throw new BadRequestError("Endereço de email já cadastrado!");

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
        const validEmail = new Email(email);
        return this.manager.findOne(User, { email: validEmail.address });
    }

    public findByName(name: string): Promise<User>
    {
        return this.manager.findOne(User, { name: name });
    }
}
