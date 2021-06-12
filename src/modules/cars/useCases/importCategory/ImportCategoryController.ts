import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryService } from './ImportCategoryService';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const importCategoryService = container.resolve(ImportCategoryService);
    const { file } = request;

    const categories = await importCategoryService.execute(file);
    return response.status(200).json(categories);
  }
}

export { ImportCategoryController };
