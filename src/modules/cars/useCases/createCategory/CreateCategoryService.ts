import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

interface ICreateRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateRequest): Promise<Category> {
    const checkExists = await this.repository.findByName(name);
    console.log(checkExists);
    if (checkExists) {
      throw new Error('Category already exists');
    }

    const category = await this.repository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryService };
