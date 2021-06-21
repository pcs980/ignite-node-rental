import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/listCategory/ListCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();
const upload = multer({
  dest: 'tmp/',
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', ensureAuthenticated, listCategoryController.handle);
categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle);

export { categoriesRoutes };
