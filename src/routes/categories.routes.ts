import { Router } from 'express';
import { CategoriesRepository } from '../repos/CategoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const repository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  try {
    const category = new CreateCategoryService(repository).execute({
      name,
      description,
    });
    return response.status(201).json(category);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

categoriesRoutes.get('/', (request, response) => {
  const data = repository.list();
  return response.status(200).json(data);
});

export { categoriesRoutes };
