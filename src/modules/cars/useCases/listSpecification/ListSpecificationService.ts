import { Specification } from '../../entities/Specification';
import { SpecificationRepository } from '../../repositories/SpecificationsRepository';

class ListSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationService };
