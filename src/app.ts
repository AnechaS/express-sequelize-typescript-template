import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import createHttpError from 'http-errors';
import httpStatus from 'http-status';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yaml';
import routes from '@/routes';
import logger from '@/common/logger';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');

// Swagger
if (process.env.DISABLE_DOCUMENT !== 'true') {
  app.use('/docs', express.static(path.resolve(__dirname, '../docs')));
  const swaggerYaml = fs.readFileSync(path.resolve(__dirname, '../docs/swagger.yaml'), 'utf8');
  const swaggerDoc = yaml.parse(swaggerYaml);
  app.use('/docs', swaggerUi.serve);
  app.get('/docs', swaggerUi.setup(swaggerDoc));
}

app.use('/v1', routes);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createHttpError(httpStatus.NOT_FOUND));
});

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error, _req, res, _next) => {
  const statusCode = error.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || httpStatus[statusCode];

  if (statusCode >= httpStatus.INTERNAL_SERVER_ERROR) {
    // TODO: set request data.
    logger.error(error);
  }

  res.status(statusCode).json({
    statusCode,
    message,
  });
});

export default app;
