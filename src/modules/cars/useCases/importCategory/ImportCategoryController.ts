import { Request, Response } from 'express';
import { ImportCategoryService } from './ImportCategoryService';

class ImportCategoryController {
  constructor(private importCategoryService: ImportCategoryService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const categories = await this.importCategoryService.execute(file);
    return response.status(200).json(categories);
  }
}

export { ImportCategoryController };
