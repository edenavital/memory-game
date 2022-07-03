import { Logger } from 'winston';
import { buildProdLogger, buildDevLogger } from './logger.utils';
import * as dotenv from 'dotenv';
dotenv.config();

export let logger: Logger;

if (process.env.NODE_ENV === 'development') {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}
