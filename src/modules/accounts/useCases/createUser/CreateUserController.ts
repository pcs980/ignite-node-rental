import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driverLicense } = request.body;
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name, email, password, driverLicense
    });
    return response.status(201).json(user);
  }
}

export { CreateUserController };
