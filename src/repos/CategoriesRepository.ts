import { Category } from '../models/category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create(request: ICreateCategoryDTO): Category {
    const category = new Category();
    Object.assign(category, {
      name: request.name,
      description: request.description,
      created_at: new Date(),
    });
    this.categories.push(category);
    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((c) => c.name === name.trim());
    return category;
  }
}

export { CategoriesRepository };
