import { Level } from "./BaseGame.types";

export class BaseGame {
  private _level: Level;

  constructor(level: Level) {
    this._level = level;
  }
}
