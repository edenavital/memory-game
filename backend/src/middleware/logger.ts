import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const msg = {
    url: req.url,
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query,
    transactionid: process.env.transactionid,
    serviceid: process.env.serviceid,
    podid: process.env.podid,
    nodeid: process.env.nodeid,
  };

  logger.log('request', JSON.stringify(msg));

  next();
};

export const startGameMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const msg = {
    url: req.url,
    method: req.method,
  };

  logger.log('request', JSON.stringify(msg));

  next();
};
