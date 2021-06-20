import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { IUsersRepository } from './interfaces/IUsersRepository';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password, driverLicense }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      driverLicense,
      isAdmin: false,
    });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }
}

export { UsersRepository };
