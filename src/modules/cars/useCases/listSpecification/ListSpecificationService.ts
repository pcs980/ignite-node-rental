import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { SpecificationRepository } from '../../repositories/SpecificationsRepository';

@injectable()
class ListSpecificationService {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: SpecificationRepository
  ) {}

  execute(): Promise<Specification[]> {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationService };
