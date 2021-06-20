import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(request: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  findByName(name: string): Promise<User>;
}

export { IUsersRepository };
