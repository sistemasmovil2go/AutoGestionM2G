import "reflect-metadata";
// import Tickets from "./config/airtable.config";
import app from "./app";
import { EXPRESS_PORT } from "./constants";
import { SqlServerDataSource } from "./config/m2gdb.config";
import { IssabelDataSource } from "./config/issabeldb.config";

async function main() {
  await SqlServerDataSource.initialize();
  await IssabelDataSource.initialize();

  console.log("Database Connected");

  app.listen(EXPRESS_PORT, () =>
    console.log(`Server running on port ${EXPRESS_PORT}`)
  );

  // const venta2000 = await SqlServerDataSource.manager.findOneBy(
  //   ResumenVentasGeneral,
  //   { idVentaCabecera: 32148 }
  // );

  // console.log("La venta 2000: ", venta2000);

  // const records = await Tickets.select({ view: "Tareas Sistemas" }).firstPage();
  // console.log(records[0]);
}

main();
