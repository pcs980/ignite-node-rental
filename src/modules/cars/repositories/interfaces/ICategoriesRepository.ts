import { Category } from '../../entities/Category';

// DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create(request: ICreateCategoryDTO): Category;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICreateCategoryDTO, ICategoriesRepository };
