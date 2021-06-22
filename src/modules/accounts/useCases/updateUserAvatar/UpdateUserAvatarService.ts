import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { deleteFile } from "../../../../shared/file";

interface IAvatarRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ userId, avatarFile }: IAvatarRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    console.log(user);

    if (user.avatar) {
      await deleteFile(`tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;

    const updated = await this.usersRepository.create(user);
    return updated;
  }
}

export { UpdateUserAvatarService };
