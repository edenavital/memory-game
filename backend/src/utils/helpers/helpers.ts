import { initMongo } from '../mongodb';

export const initUtils = async () => {
  await initMongo();
};
