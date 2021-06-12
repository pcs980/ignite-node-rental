import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

@injectable()
class ListCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private repository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    return this.repository.list();
  }
}

export { ListCategoryService };
