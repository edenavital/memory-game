import { Request, Response } from "express";
import { expressAsyncWrapper } from "../middleware";

import gameService from "../services/game.service";
import { successResponse } from "../utils";
import { IGame } from "../models/game";
// import { StatusCode } from 'http-status-codes';
// import { AppError } from '../utils/AppError/AppError';
import { GetSingleGameParams } from "../models/game/game.types";
import { Level, StartGame } from "../features/Game/StartGame";

// Request<{}, {}, {}, IGame>

const gameController = {
  getGames: expressAsyncWrapper(async (req: Request, res: Response) => {
    const games = await gameService.getGames();
    return successResponse({ data: games }, res);
  }),
  getGame: expressAsyncWrapper(
    async (req: Request<GetSingleGameParams>, res: Response) => {
      const game = await gameService.getGame(req.params);
      return successResponse({ data: game }, res);
    }
  ),
  saveGame: expressAsyncWrapper(
    async (req: Request<{}, {}, {}, IGame>, res: Response) => {
      await gameService.createGame(req.query);
      return successResponse({ data: "successfully created game" }, res);
    }
  ),
  startGame: expressAsyncWrapper(async (req: Request, res: Response) => {
    const { level } = req.body;
    const gameData = new StartGame(level as Level);
    const cards = await gameData.generateGame();

    return successResponse({ data: cards }, res);
  }),
};

export default gameController;
