import { ConfigEnv } from "./interfaces/config.interface";

export const EnvConfiguration = (): ConfigEnv => (
  {
    ENV: process.env.NODE_ENV || 'dev',
    PORT: +process.env.PORT || 3002,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: +process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
  }
)