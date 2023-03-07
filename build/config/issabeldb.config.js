"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssabelDataSource = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const agente_1 = require("../models/agente");
exports.IssabelDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: constants_1.ISSABEL_PORT,
    username: "root",
    password: "admin",
    database: "gestion_bd",
    synchronize: false,
    logging: true,
    entities: [agente_1.Agente],
    // subscribers: [],
    // migrations: [],
});
//# sourceMappingURL=issabeldb.config.js.map