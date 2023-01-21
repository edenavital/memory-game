import { initMongo } from "../mongodb";
import * as dotenv from "dotenv";
import { initLogger } from "../logger";
import { initPexels } from "../pexels";
dotenv.config();

export const initUtils = async () => {
  console.log("initUtils called");
  initLogger();
  await initMongo();
  initPexels();
};
