import * as dotenv from "dotenv";
import { createClient } from "pexels";
import { logger } from "../logger";
dotenv.config();

const key = process.env.PEXELS_API_KEY || "";

export let pexelsClient: ReturnType<typeof createClient> | undefined;

export const initPexels = () => {
  try {
    pexelsClient = createClient(key);
    logger.info("Connected successfully to PexelsApi ");
  } catch (err) {
    logger.error(err);
  }
};
