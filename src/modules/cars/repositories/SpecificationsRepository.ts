import { Specification } from '../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './interfaces/ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    console.log(name, description);

    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications = [...this.specifications, specification];

    return specification;
  }

  findByName(name: string): Specification {
    return this.specifications.find((s) => s.name === name.trim());
  }
}

export { SpecificationRepository };
