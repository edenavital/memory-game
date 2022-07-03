import { Document } from 'mongoose';

export interface IGame {
  gameDuration: number;
  nickname: string;
  actions: number;
}

export interface MongooseIGame extends IGame, Document {}

export type GetSingleGameParams = { gameId: string };
