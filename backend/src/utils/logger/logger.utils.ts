import { createLogger, format, transports, config, addColors } from 'winston';
import 'winston-mongodb';
import { generateMongoUri } from '../mongodb';

const { timestamp, combine, printf, errors, json, colorize } = format;

// Logging format for .Console
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Adding a custom level named 'request'
const levels = { ...config.syslog.levels, request: 6.5 };
// Configuring 'request' color - allowed colors (https://www.npmjs.com/package/colors)
addColors({ ...config.syslog.colors, request: config.syslog.colors.debug });

export const buildDevLogger = () => {
  return createLogger({
    levels,
    format: combine(timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), format.errors({ stack: true }), logFormat),
    transports: [
      new transports.Console({
        format: combine(colorize(), logFormat),
        level: 'debug',
      }),
      new transports.MongoDB({
        level: 'request',
        options: { useUnifiedTopology: true },
        db: generateMongoUri(),
        collection: 'requests',
      }),
    ],
  });
};

export const buildProdLogger = () => {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'memory-api-service' },
    transports: [new transports.Console()],
  });
};
