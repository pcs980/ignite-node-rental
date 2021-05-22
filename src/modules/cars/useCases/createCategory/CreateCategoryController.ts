import { Request, Response } from 'express';
import CreateCategoryService from './CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      const category = this.createCategoryService.execute({
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
