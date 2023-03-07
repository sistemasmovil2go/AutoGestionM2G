"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTicketsAsesor = void 0;
const ticket_1 = require("../models/ticket");
async function getTicketsAsesor() {
    const ticket = new ticket_1.Ticket();
    return await ticket.getSysTickets();
}
exports.getTicketsAsesor = getTicketsAsesor;
//# sourceMappingURL=ticket.service.js.map