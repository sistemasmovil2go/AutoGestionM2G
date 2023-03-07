"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// import Tickets from "./config/airtable.config";
const app_1 = __importDefault(require("./app"));
const constants_1 = require("./constants");
const m2gdb_config_1 = require("./config/m2gdb.config");
const issabeldb_config_1 = require("./config/issabeldb.config");
async function main() {
    await m2gdb_config_1.SqlServerDataSource.initialize();
    await issabeldb_config_1.IssabelDataSource.initialize();
    console.log("Database Connected");
    app_1.default.listen(constants_1.EXPRESS_PORT, () => console.log(`Server running on port ${constants_1.EXPRESS_PORT}`));
    // const venta2000 = await SqlServerDataSource.manager.findOneBy(
    //   ResumenVentasGeneral,
    //   { idVentaCabecera: 32148 }
    // );
    // console.log("La venta 2000: ", venta2000);
    // const records = await Tickets.select({ view: "Tareas Sistemas" }).firstPage();
    // console.log(records[0]);
}
main();
//# sourceMappingURL=index.js.map