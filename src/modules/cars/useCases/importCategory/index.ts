import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';

const repository = CategoriesRepository.getInstance();
const service = new ImportCategoryService(repository);
const importCategoryController = new ImportCategoryController(service);

export { importCategoryController };
