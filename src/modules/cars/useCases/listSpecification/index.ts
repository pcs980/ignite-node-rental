import { SpecificationRepository } from '../../repositories/SpecificationsRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationService } from './ListSpecificationService';

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationService = new ListSpecificationService(
  specificationRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationService
);

export { listSpecificationController };
