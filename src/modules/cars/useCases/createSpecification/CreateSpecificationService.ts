import { Specification } from '../../models/Specification';
import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Specification {
    const alreadyExists = this.specificationRepository.findByName(name);
    if (alreadyExists) {
      throw new Error('Specification already exists');
    }

    return this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
