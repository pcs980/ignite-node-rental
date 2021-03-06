import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import { router, swaggerFile } from './routes';
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(error);
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message });
  }

  return response.status(500).json({ error: error.message });
});

app.listen(3333, () => console.log('Server is running on port', 3333));
