import * as Joi from "joi";
import { ConfigEnv } from "./interfaces/config.interface";

export const JoiValidationSchema = Joi.object<ConfigEnv>({
  // URL_CMP: Joi.string().required(),
  PORT: Joi.number().default(3000),
  ENV: Joi.string().default("dev"),
  DB_HOST: Joi.required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.required(),
  DB_PASSWORD: Joi.required(),
  DB_USER: Joi.required(),
});