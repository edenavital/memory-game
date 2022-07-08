import { initMongo } from "../mongodb";
import * as dotenv from "dotenv";
import { initPexels } from "../pexels";
dotenv.config();

export const initUtils = async () => {
  await initMongo();
  initPexels();
};
