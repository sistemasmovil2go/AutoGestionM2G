"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTicket = exports.getTicketsAsesor = void 0;
const ticket_1 = require("../models/ticket");
// import { TicketOperaciones } from "../types/types";
const ticket = new ticket_1.Ticket().getOpTickets();
async function getTicketsAsesor(asesor, puesto) {
    // let lista = []
    const opTickets = ticket.select({
        view: "API",
        // filterByFormula: `{asesor} = '${asesor}'`,
        filterByFormula: `AND( {asesor} = '${asesor}', {Num Puesto} = '${puesto}')`,
        // returnFieldsByFieldId: true,
    });
    return await opTickets.all();
}
exports.getTicketsAsesor = getTicketsAsesor;
async function insertTicket(opTicket) {
    const aIngresar = await ticket.create(opTicket, {
        typecast: true,
    });
    return aIngresar;
}
exports.insertTicket = insertTicket;
//# sourceMappingURL=ticket.service.js.map