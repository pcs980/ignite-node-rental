import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import swaggerFile from './swagger.json';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router, swaggerFile };
