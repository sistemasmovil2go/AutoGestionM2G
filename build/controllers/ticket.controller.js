"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTicketsAsesorController = void 0;
const ticket_service_1 = require("../services/ticket.service");
async function getTicketsAsesorController(_req, res) {
    try {
        const tickets = await (0, ticket_service_1.getTicketsAsesor)();
        res.status(200).send(tickets);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}
exports.getTicketsAsesorController = getTicketsAsesorController;
//# sourceMappingURL=ticket.controller.js.map