import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppError, GlobalErrorType } from '../features/AppError';
import { errorResponse } from '../utils/helpers';
import { logger } from '../utils/logger';

export const expressAsyncWrapper = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next);
};

export const errorHandler = (err: GlobalErrorType, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  if (err instanceof AppError) {
    return errorResponse(err, res);
  }

  // Incase the error was not thrown by a developer (Not operational) - map it into a known error with AppError class (generates meta data about the error)
  let mappedError = { ...err };

  if (err.name === 'JsonWebTokenError') {
    mappedError = new AppError('Invalid token. Please log in again!', StatusCodes.UNAUTHORIZED);
  } else if (err.name === 'TokenExpiredError') {
    mappedError = new AppError('Your token has expired! Please log in again.', StatusCodes.UNAUTHORIZED);
  }

  return errorResponse(mappedError, res);

  // next();
};

/**
   * There are 2 approches with global error handling
   * 1. The developer wraps every function with try ... catch blocks, and whenever there is an error - he sends it to the next function as argument
   * he will create an error out of it in order to add meta data - for example:
   * next(throw new Error('bla...')) | next(new AppError('bla'))
   * the error will reach here with all it's relevant data, and we will perform actions to it for example log it, bi events and more...
   * 
   * The second approach is to wrap each async function with HOC that sends the error automatically
   * This eliminates all the try catch blocks, but it will require us to map all errors and create them from here
   * 
    Map all errors in a single place
      A) Operational Error, trusted error - do not reset app
      B) Programming or other unknown error - reset app
   */
