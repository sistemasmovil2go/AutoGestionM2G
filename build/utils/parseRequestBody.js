"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewOpTicketAppOp = exports.toNewOpTicketDesancle = void 0;
const utils_validations_1 = require("./utils.validations");
function parseTipoTicket(tipoTicketFromRequest) {
    if (!(0, utils_validations_1.isTipoTicket)(tipoTicketFromRequest)) {
        throw new Error("Tipo de Ticket no existe, es incorrecto o faltante");
    }
    return tipoTicketFromRequest;
}
function parseCampo(campoFromRequest, nombreCampo) {
    if (!(0, utils_validations_1.isString)(campoFromRequest))
        throw new Error(`${nombreCampo} incorrecto o faltante`);
    return campoFromRequest;
}
function toNewOpTicketDesancle(object) {
    const newTicket = {
        "Tipo de Ticket": parseTipoTicket(object.tipoTicket),
        "Cliente Desancle": parseCampo(object.clienteDesancle, "Nombre de cliente"),
        "Identificacion Desancle": parseCampo(object.identificacionDesancle, "Identificación de Desancle"),
        Puesto: parseCampo(object.numPuesto, "Puesto"),
        Equipo: parseCampo(object.equipo, "Equipo"),
        Estado: parseCampo(object.estado, "Estado"),
        Observacion: parseCampo(object.observacion, "Observación"),
    };
    return newTicket;
}
exports.toNewOpTicketDesancle = toNewOpTicketDesancle;
function toNewOpTicketAppOp(object) {
    const newTicket = {
        "Tipo de Ticket": parseTipoTicket(object.tipoTicket),
        Puesto: parseCampo(object.numPuesto, "Puesto"),
        Equipo: parseCampo(object.equipo, "Equipo"),
        Estado: parseCampo(object.estado, "Estado"),
        Observacion: parseCampo(object.observacion, "Observación"),
    };
    return newTicket;
}
exports.toNewOpTicketAppOp = toNewOpTicketAppOp;
//# sourceMappingURL=parseRequestBody.js.map