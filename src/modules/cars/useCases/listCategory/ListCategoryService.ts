import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

class ListCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.list();
  }
}

export { ListCategoryService };
