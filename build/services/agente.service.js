"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgenteById = exports.getAgentes = void 0;
const agente_1 = require("../models/agente");
async function getAgentes() {
    const agentes = await agente_1.Agente.find({ where: { estatus: "A" } });
    return agentes;
}
exports.getAgentes = getAgentes;
async function getAgenteById(numero) {
    const agente = await agente_1.Agente.find({ where: { estatus: "A", number: numero } });
    return agente;
}
exports.getAgenteById = getAgenteById;
//# sourceMappingURL=agente.service.js.map