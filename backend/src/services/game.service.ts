import { MongooseIGame, GameModel } from '../models/game';
import { FilterQuery } from 'mongoose';
import { GetSingleGameParams } from '../models/game/game.types';

const gameService = {
  getGames: async () => {
    const games = await GameModel.find();
    return games;
  },
  getGame: async (params: GetSingleGameParams) => {
    const { gameId } = params;
    const singleGame = await GameModel.findById(gameId);
    return singleGame;
  },
  createGame: async (query: FilterQuery<MongooseIGame>) => {
    const { gameDuration, nickname, actions } = query;
    const game = await GameModel.create({ gameDuration, nickname, actions });
    return game;
  },
  // deleteGames: async (query: <DocumentDefinition<MongooseIGame>) => {
  //   const
  // }
};

export default gameService;
