import winston from 'winston';
const { combine, timestamp, json, colorize, printf } = winston.format;

const devFormat = printf(({ level, message, timestamp, ...meta }) => {
  return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console({
      format: process.env.NODE_ENV === 'production' ? combine(timestamp(), json()) : combine(colorize(), timestamp(), devFormat),
    }),
    new winston.transports.File({ filename: '/var/log/hotelshift/error.log', level: 'error' }),
    new winston.transports.File({ filename: '/var/log/hotelshift/combined.log' }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: '/var/log/hotelshift/exceptions.log' }),
  ],
});
