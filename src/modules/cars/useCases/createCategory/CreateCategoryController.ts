import { Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const category = await this.createCategoryService.execute({
        name,
        description,
      });
      return response.status(201).json(category);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
