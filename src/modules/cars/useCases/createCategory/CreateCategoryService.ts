import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

interface ICreateRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private repository: ICategoriesRepository
  ) {}

  async execute({ name, description }: ICreateRequest): Promise<Category> {
    const checkExists = await this.repository.findByName(name);
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
