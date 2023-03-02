import { DataSource } from "typeorm";
import { ISSABEL_PORT } from "../constants";
import { Numeros } from "../entities/numeros";

export const IssabelDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: ISSABEL_PORT,
  username: "root",
  password: "admin",
  database: "gestion_bd",
  synchronize: false,
  logging: true,
  entities: [Numeros],
  // subscribers: [],
  // migrations: [],
});
