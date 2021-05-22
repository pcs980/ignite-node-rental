import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

interface ICreateRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  execute({ name, description }: ICreateRequest): Category {
    const checkExists = this.repository.findByName(name);
    if (checkExists) {
      throw new Error('Category already exists');
    }

    const category = this.repository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryService };
