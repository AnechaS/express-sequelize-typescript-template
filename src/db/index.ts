import path from 'node:path';
import { Sequelize } from 'sequelize-typescript';
import logger from '../common/logger';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_LOGGING } = process.env;

const db = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD, {
  host: DB_HOST,
  port: +DB_PORT! || 3306,
  dialect: 'mysql',
  models: [path.resolve(__dirname, '../**/*.model.{ts,js}')],
  ...(DB_LOGGING !== 'true' && {
    logging: false,
  }),
  define: {
    underscored: true,
  },
});

db.sync({ alter: true }).then(
  () => {
    logger.debug('Connection has been established successfully.');
  },
  (error) => {
    logger.warn(error, 'Unable to connect to the database');
  }
);

Object.values(db.models).forEach((model) => {
  logger.debug(`Loaded model ${model.name}`);
});

export default db;
