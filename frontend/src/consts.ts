export enum FRONTEND_ROUTES {
  ROOT = "/",
  MENU = "/menu",
  LEVEL = "/level",
  GAME = "/game",
}

export const BASE_ROUTES = {
  API: "/api",
  GAME: "/game",
} as const;

export const GAME_ROUTES = {
  GET_GAMES: "/getGames",
  GET_GAME: "/getGame",
  SAVE_GAME: "/saveGame",
  START_GAME: "/startGame",
} as const;
