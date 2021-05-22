import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  try {
    const { name, description } = request.body;
    const specification = createSpecificationService.execute({
      name,
      description,
    });

    return response.status(201).json(specification);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export { specificationsRoutes };
