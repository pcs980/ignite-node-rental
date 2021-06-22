import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarService } from "./UpdateUserAvatarService";

class UpdateUserAvatarController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const avatarFile = request.file.filename;

    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
    const result = await updateUserAvatarService.execute({ userId, avatarFile });

    return response.status(200).json(result);
  }
}

export { UpdateUserAvatarController };
