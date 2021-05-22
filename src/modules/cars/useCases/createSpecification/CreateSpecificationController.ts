import { Request, Response } from 'express';
import { CreateSpecificationService } from './CreateSpecificationService';

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;
      const specification = this.createSpecificationService.execute({
        name,
        description,
      });

      return response.status(201).json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateSpecificationController };
