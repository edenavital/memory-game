import mongoose, { Schema } from 'mongoose';
import { MongooseIGame } from './game.types';

const GameSchema = new Schema<MongooseIGame>(
  {
    gameDuration: { type: Number, required: true },
    nickname: { type: String, required: true },
    actions: { type: Number, required: true },
  },
  { timestamps: true },
);

export const GameModel = mongoose.model<MongooseIGame>('Game', GameSchema);
