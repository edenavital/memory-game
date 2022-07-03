export enum Level {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export interface GlobalState {
  nickname: string;
  level: Level;
}
