import { DataSource } from "typeorm";
import { SQL_SERVER_PORT } from "../constants";
import { Venta } from "../entities/venta";
import { Usuario } from "../entities/usuario";

export const SqlServerDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: SQL_SERVER_PORT,
  username: "m2gAuto",
  password: "Movilm2g2022",
  database: "SIPE_Negocio_Principal",
  synchronize: false,
  logging: true,
  options: { encrypt: false },
  entities: [Venta, Usuario],
  // subscribers: [],
  // migrations: [],
});
