import csv from 'csv-parse';
import fs from 'fs';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';
import { CreateCategoryService } from '../createCategory/CreateCategoryService';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parser = csv();

      stream.pipe(parser);
      parser
        .on('data', async (line: string[]) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          console.log('Import ended with', categories.length, 'records');
          fs.unlinkSync(file.path);
          resolve(categories);
        })
        .on('error', (error) => {
          console.error('Error importing categories', error.message);
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<Category[]> {
    const categories = await this.loadCategories(file);
    categories.map((category) => {
      const createCategoryService = new CreateCategoryService(this.repository);
      const { name, description } = category;
      try {
        const category = createCategoryService.execute({
          name,
          description,
        });
        return category;
      } catch (error) {
        console.error('Error inserting imported category:', error.message);
        return null;
      }
    });
    return this.repository.list();
  }
}

export { ImportCategoryService };
