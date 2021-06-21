import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "./AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateService = container.resolve(AuthenticateUserService);

    try {
      const result = await authenticateService.execute({ email, password });
      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export { AuthenticateUserController };
