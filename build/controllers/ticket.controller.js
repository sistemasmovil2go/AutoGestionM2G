"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTicketDesancleController = exports.insertTicketAppOpController = exports.insertTicketController = exports.getTicketsAsesorController = void 0;
const agente_service_1 = require("../services/agente.service");
const ticket_service_1 = require("../services/ticket.service");
const parseRequestBody_1 = require("../utils/parseRequestBody");
async function getTicketsAsesorController(req, res) {
    try {
        const puesto = req.params.puesto;
        const asesor = (await (0, agente_service_1.getAgenteByPuesto)(puesto)).name;
        const tickets = await (0, ticket_service_1.getTicketsAsesor)(asesor, puesto);
        res.status(200).send(tickets);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send({ msg: e.message });
    }
}
exports.getTicketsAsesorController = getTicketsAsesorController;
async function insertTicketController(req, res) {
    try {
        const camposTicket = req.body;
        const response = await (0, ticket_service_1.insertTicket)(camposTicket);
        res.send(response);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send({ msg: e.message });
    }
}
exports.insertTicketController = insertTicketController;
async function insertTicketAppOpController(req, res) {
    try {
        const newTicket = (0, parseRequestBody_1.toNewOpTicketAppOp)(req.body);
        const response = await (0, ticket_service_1.insertAppOpTicket)(newTicket, Number(req.params.idVenta), req.params.puesto);
        res.send(response);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send({ msg: e.message });
    }
}
exports.insertTicketAppOpController = insertTicketAppOpController;
async function insertTicketDesancleController(req, res) {
    try {
        const newTicket = (0, parseRequestBody_1.toNewOpTicketDesancle)(req.body);
        const response = await (0, ticket_service_1.insertDesancleTicket)(newTicket);
        res.send(response);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send({ msg: e.message });
    }
}
exports.insertTicketDesancleController = insertTicketDesancleController;
//# sourceMappingURL=ticket.controller.js.map