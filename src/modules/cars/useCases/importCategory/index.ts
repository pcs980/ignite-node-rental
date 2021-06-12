import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';

export default (): ImportCategoryController => {
  const repository = new CategoriesRepository();
  const service = new ImportCategoryService(repository);
  const importCategoryController = new ImportCategoryController(service);

  return importCategoryController;
};

