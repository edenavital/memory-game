// import initUtils from '.'
import { app } from './app';
import { logger } from './utils/';
import * as dotenv from 'dotenv';
import { initUtils } from './utils/helpers/helpers';
dotenv.config();

process
  .on('unhandledRejection', (reason: Error, promise: Promise<unknown>) => {
    logger.error('Unhandled Rejection at Promise', reason, promise);
  })
  /**
   * The correct use of 'uncaughtException' is to perform synchronous cleanup of allocated resources (e.g. file descriptors, handles, etc)
   * before shutting down the process. - graceful shutdown
   *  */
  .on('uncaughtException', (err: Error) => {
    logger.error('uncaughtException', err);
  });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
  logger.info(`Server is running on port ${PORT}`);
  await initUtils();
});
