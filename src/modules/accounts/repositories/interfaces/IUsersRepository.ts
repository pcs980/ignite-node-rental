import { User } from '../../entitites/User';

interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driverLicense: string;
  isAdmin: boolean;
}

interface IUsersRepository {
  create(request: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  findByName(name: string): Promise<User>;
}

export { ICreateUserDTO, IUsersRepository };
