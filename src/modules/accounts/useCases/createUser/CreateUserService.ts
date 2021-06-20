import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute(request: ICreateUserDTO): Promise<User> {
    const user = await this.repository.create(request);

    return user;
  }
}

export { CreateUserService };
