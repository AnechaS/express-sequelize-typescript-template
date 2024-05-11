import 'dotenv/config';
import http from 'http';
import db from '@/db';
import app from '@/app';
import logger from '@/common/logger';

const port = +process.env.PORT! || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});

const quit = () => {
  db.close();
  server.close();
};
process.on('SIGINT', quit);
process.on('SIGTERM', quit);
