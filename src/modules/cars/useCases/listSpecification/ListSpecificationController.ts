import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationService } from './ListSpecificationService';

class ListSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationService = container.resolve(ListSpecificationService);
    try {
      const specifications = await listSpecificationService.execute();
      return response.status(200).json(specifications);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListSpecificationController };
