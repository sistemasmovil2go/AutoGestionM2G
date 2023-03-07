"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgenteByIdController = exports.getAgentesController = void 0;
const agente_service_1 = require("../services/agente.service");
async function getAgentesController(_req, res) {
    try {
        const agentes = await (0, agente_service_1.getAgentes)();
        res.status(200).send(agentes);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}
exports.getAgentesController = getAgentesController;
async function getAgenteByIdController(req, res) {
    try {
        const numero = req.params.num;
        const agente = await (0, agente_service_1.getAgenteById)(numero);
        res.status(200).send(agente);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}
exports.getAgenteByIdController = getAgenteByIdController;
//# sourceMappingURL=agente.controller.js.map