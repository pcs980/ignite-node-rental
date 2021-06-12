import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/ICategoriesRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/interfaces/ISpecificationRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);
