import { Request, Response } from 'express';
import { ListCategoryService } from './ListCategoryService';

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}

  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const categories = await this.listCategoryService.execute();
      return response.status(201).json(categories);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListCategoryController };
