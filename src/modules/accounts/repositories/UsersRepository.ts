import { getRepository, Repository } from 'typeorm';
import { User } from '../entitites/User';
import {
  IUsersRepository,
  ICreateUserDTO,
} from './interfaces/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, username, email, password, driverLicense, isAdmin }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driverLicense,
      isAdmin
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
