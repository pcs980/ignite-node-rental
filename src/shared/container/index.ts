import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/ICategoriesRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/interfaces/ISpecificationRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/interfaces/IUsersRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationsRepository';
import { UsersRepository } from '../../modules/accounts/repositories/UsersRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
