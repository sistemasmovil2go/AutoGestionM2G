"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "m2gAuto",
    password: "Movilm2g2022",
    database: "SIPE_Negocio_Principal",
    synchronize: true,
    logging: true,
    options: { encrypt: false },
    // entities:
    // subscribers: [],
    // migrations: [],
});
//# sourceMappingURL=db.js.map