import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryService } from './ListCategoryService';

export default (): ListCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryService = new ListCategoryService(categoriesRepository);
  const listCategoryController = new ListCategoryController(
    createCategoryService
  );

  return listCategoryController;
};

