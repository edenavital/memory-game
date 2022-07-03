import { StatusCodes } from 'http-status-codes';

export interface requestCommon {
  message?: string;
  statusCode?: StatusCodes;
}

export interface ISucessfullParams<T> extends requestCommon {
  data: T;
}

interface responseCommon extends requestCommon {
  success?: boolean;
}

export interface ISucessfullResponse<T> extends responseCommon, ISucessfullParams<T> {}

// export interface IFailRequest extends responseCommon {}
// export interface IFailResponse extends responseCommon {}
