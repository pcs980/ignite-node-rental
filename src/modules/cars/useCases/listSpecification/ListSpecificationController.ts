import { Request, Response } from 'express';
import { ListSpecificationService } from './ListSpecificationService';

class ListSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}

  handle(request: Request, response: Response): Response {
    try {
      const specifications = this.listSpecificationService.execute();
      return response.status(200).json(specifications);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListSpecificationController };
