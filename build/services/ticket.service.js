"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDesancleTicket = exports.insertAppOpTicket = exports.insertTicket = exports.getTicketsAsesor = void 0;
const ticket_1 = require("../models/ticket");
const agente_service_1 = require("./agente.service");
const venta_service_1 = require("./venta.service");
const ticket = new ticket_1.Ticket().getOpTickets();
async function hasInsertPermission(puesto, nombreAsesorFromVenta) {
    const nombreAsesor = (await (0, agente_service_1.getAgenteByPuesto)(puesto)).name;
    return nombreAsesor === nombreAsesorFromVenta;
}
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
    const aIngresar = await ticket.create(opTicket, { typecast: true });
    return aIngresar;
}
exports.insertTicket = insertTicket;
async function insertAppOpTicket(newOpTicket, idVenta, puesto) {
    const venta = await (0, venta_service_1.getVentaById)(idVenta);
    const permission = await hasInsertPermission(puesto, venta.asesor);
    // TODO
    // -Aqui debo validar con la venta en lugar de con el body que se envía desde el frontend
    if (!permission) {
        throw new Error("No tienes permiso para insertar ticket sobre esta venta");
    }
    console.log(venta.estadoVenta, venta.fechaOperativa);
    if (!(venta.estadoVenta === "Aprobado" && venta.fechaOperativa !== null)) {
        throw new Error("Esta venta no cumple los requisitos para pasar de APP a OP");
    }
    const newOpTicketWithVenta = Object.assign(Object.assign({}, newOpTicket), venta);
    console.log(newOpTicketWithVenta);
    return await ticket.create(newOpTicketWithVenta, { typecast: true });
}
exports.insertAppOpTicket = insertAppOpTicket;
async function insertDesancleTicket(newOpTicket) {
    return await ticket.create(newOpTicket, { typecast: true });
}
exports.insertDesancleTicket = insertDesancleTicket;
//# sourceMappingURL=ticket.service.js.map