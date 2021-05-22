import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryService } from './ListCategoryService';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryService = new ListCategoryService(categoriesRepository);
const listCategoryController = new ListCategoryController(
  createCategoryService
);

export { listCategoryController };
