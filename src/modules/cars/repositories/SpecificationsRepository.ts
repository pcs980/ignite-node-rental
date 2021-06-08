import { Specification } from '../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './interfaces/ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
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

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationRepository };
