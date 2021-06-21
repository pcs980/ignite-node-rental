import { inject, injectable } from "tsyringe";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

interface IAuthenticateUserResponse {
  user: {
    name: string;
    email: string;
    created_at: Date;
  };
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error('E-mail or password incorrect');
    }

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('E-mail or password incorrect');
    }

    const payload = {};

    const token = sign(payload, '216d90ec2183cb9cbedcdaf7ee5c4fd2', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user: {
        name: user.name,
        email: user.email,
        created_at: user.created_at,
      },
      token,
    };
  }
}

export { AuthenticateUserService };
