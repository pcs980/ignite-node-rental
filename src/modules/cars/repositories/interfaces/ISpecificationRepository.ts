import { Specification } from '../../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create(request: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
