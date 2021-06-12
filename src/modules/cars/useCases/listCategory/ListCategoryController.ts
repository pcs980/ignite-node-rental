import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoryService } from './ListCategoryService';

class ListCategoryController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listCategoryService = container.resolve(ListCategoryService);
    try {
      const categories = await listCategoryService.execute();
      return response.status(201).json(categories);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListCategoryController };
