"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgenteByPuesto = exports.getAgentes = void 0;
const agente_1 = require("../models/agente");
async function getAgentes() {
    const agentes = await agente_1.Agente.find({ where: { estatus: "A" } });
    return agentes;
}
exports.getAgentes = getAgentes;
async function getAgenteByPuesto(puesto) {
    const agente = await agente_1.Agente.find({ where: { estatus: "A", number: puesto } });
    return agente[0];
}
exports.getAgenteByPuesto = getAgenteByPuesto;
//# sourceMappingURL=agente.service.js.map