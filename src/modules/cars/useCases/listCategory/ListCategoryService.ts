import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

class ListCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return this.repository.list();
  }
}

export { ListCategoryService };
