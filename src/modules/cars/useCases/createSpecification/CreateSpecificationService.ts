import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject('SpecificationRepository')
    private repository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Specification> {
    const alreadyExists = await this.repository.findByName(name);
    if (alreadyExists) {
      throw new Error('Specification already exists');
    }

    const specification = await this.repository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationService };
