import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
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
      throw new AppError('Specification already exists', 412);
    }

    const specification = await this.repository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationService };
