import express from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import { router, swaggerFile } from './routes';

const app = express();
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3333, () => console.log('Server is running on port', 3333));
