import { SpecificationRepository } from '../../repositories/SpecificationsRepository';
import { CreateCategoryController } from '../createCategory/CreateCategoryController';
import { CreateSpecificationService } from './CreateSpecificationService';

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(
  specificationRepository
);
const createSpecificationController = new CreateCategoryController(
  createSpecificationService
);

export { createSpecificationController };
