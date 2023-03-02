import * as dotenv from "dotenv";
dotenv.config();

export const EXPRESS_PORT: number = Number(process.env.EXPRESS_PORT);
export const SQL_SERVER_PORT: number = Number(process.env.SQL_SERVER_PORT);
export const ISSABEL_PORT: number = Number(process.env.ISSABEL_PORT);
export const ENV = process.env.ENV;
export const AIRTABLE_ACCESS_TOKEN = process.env.AIRTABLE_ACCESS_TOKEN;
