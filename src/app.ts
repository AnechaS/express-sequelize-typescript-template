import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import createHttpError from 'http-errors';
import httpStatus from 'http-status';
import routes from '@/routes';
import logger from '@/common/logger';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');

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
