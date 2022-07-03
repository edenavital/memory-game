import { StatusCodes } from 'http-status-codes';

export interface IAppError extends Error {
  message: string;
  statusCode: StatusCodes;
  isOperational: boolean;
  metaData?: IErrorMetaData;
  getMetaData: () => IErrorMetaData | undefined;
  getErrorInfo: () => ErrorResponseType;
}

export interface IErrorMetaData {
  fileName?: string;
  functionName?: string;
  lineNumber?: number;
  columnNumber?: number;
}

export type ErrorResponseType = Omit<IAppError, 'stack' | 'name' | 'getErrorInfo' | 'getMetaData'>;

export type GlobalErrorType = IAppError | Error;
