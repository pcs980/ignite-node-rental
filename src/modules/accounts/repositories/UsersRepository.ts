import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { IUsersRepository } from './interfaces/IUsersRepository';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    email,
    password,
    driverLicense,
    avatar,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driverLicense,
      avatar,
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

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UsersRepository };
