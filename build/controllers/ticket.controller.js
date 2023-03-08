"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTicketController = exports.getTicketsAsesorController = void 0;
const agente_service_1 = require("../services/agente.service");
const ticket_service_1 = require("../services/ticket.service");
async function getTicketsAsesorController(req, res) {
    try {
        const puesto = req.params.puesto;
        const asesor = (await (0, agente_service_1.getAgenteByPuesto)(puesto)).name;
        const tickets = await (0, ticket_service_1.getTicketsAsesor)(asesor, puesto);
        res.status(200).send(tickets);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}
exports.getTicketsAsesorController = getTicketsAsesorController;
async function insertTicketController(req, res) {
    try {
        const puesto = req.params.puesto;
        const asesor = (await (0, agente_service_1.getAgenteByPuesto)(puesto)).name;
        const camposTicket = req.body;
        if (asesor !== camposTicket.asesor) {
            res.sendStatus(403);
        }
        const response = await (0, ticket_service_1.insertTicket)(camposTicket);
        res.send(response);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}
exports.insertTicketController = insertTicketController;
//# sourceMappingURL=ticket.controller.js.map