import ErrorStackParser from 'error-stack-parser';

import { ErrorResponseType, IAppError, IErrorMetaData } from './AppError.types';
import { StatusCodes } from 'http-status-codes';

export class AppError extends Error implements IAppError {
  statusCode: StatusCodes;

  isOperational: boolean;

  stack: string | Error['stack'];

  metaData?: IErrorMetaData;

  constructor(message: string, statusCode: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
    this.metaData = this.getMetaData();
  }

  public getErrorInfo = (): ErrorResponseType => {
    const { statusCode, isOperational, metaData, message } = this;
    return { statusCode, isOperational, metaData, message };
  };

  public getMetaData = (): IErrorMetaData | undefined => {
    if (this.stack) {
      const stackFormat = ErrorStackParser.parse(this);
      if (stackFormat) {
        const [firstNode] = stackFormat;
        const { columnNumber, lineNumber, fileName, functionName } = firstNode;

        return {
          columnNumber,
          lineNumber,
          fileName,
          functionName,
        };
      }
    }
  };
}
