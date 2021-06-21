import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt';
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute({ name, email, password, driverLicense }: ICreateUserDTO): Promise<User> {
    const checkExists = await this.repository.findByEmail(email);
    if (checkExists) {
      throw new AppError('E-mail already exists', 412);
    }

    const hashedPassword = await hash(password, 6);

    const user = await this.repository.create({
      name,
      email,
      driverLicense,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUserService };
