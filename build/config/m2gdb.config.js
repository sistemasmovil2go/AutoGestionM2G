"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerDataSource = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const venta_1 = require("../models/venta");
const usuario_1 = require("../models/usuario");
exports.SqlServerDataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: "localhost",
    port: constants_1.SQL_SERVER_PORT,
    username: "m2gAuto",
    password: "Movilm2g2022",
    database: "SIPE_Negocio_Principal",
    synchronize: false,
    logging: true,
    options: { encrypt: false },
    entities: [venta_1.Venta, usuario_1.Usuario],
    // subscribers: [],
    // migrations: [],
});
//# sourceMappingURL=m2gdb.config.js.map