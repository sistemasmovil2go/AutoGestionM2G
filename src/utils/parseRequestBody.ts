import { OpTicketAppOp, OpTicket, tipoTicket } from "../types/types";
import { isString, isTipoTicket } from "./utils.validations";

function parseTipoTicket(tipoTicketFromRequest: any): tipoTicket {
  if (!isTipoTicket(tipoTicketFromRequest)) {
    throw new Error("Tipo de Ticket no existe, es incorrecto o faltante");
  }

  return tipoTicketFromRequest;
}

function parseCampo(campoFromRequest: any, nombreCampo: string): string {
  if (!isString(campoFromRequest))
    throw new Error(`${nombreCampo} incorrecto o faltante`);

  return campoFromRequest;
}

export function toNewOpTicketDesancle(object: any): OpTicket {
  const newTicket: OpTicket = {
    "Tipo de Ticket": parseTipoTicket(object.tipoTicket),
    "Cliente Desancle": parseCampo(object.clienteDesancle, "Nombre de cliente"),
    "Identificacion Desancle": parseCampo(
      object.identificacionDesancle,
      "Identificación de Desancle"
    ),
    Puesto: parseCampo(object.numPuesto, "Puesto"),
    Equipo: parseCampo(object.equipo, "Equipo"),
    Estado: parseCampo(object.estado, "Estado"),
    Observacion: parseCampo(object.observacion, "Observación"),
  };

  return newTicket;
}

export function toNewOpTicketAppOp(object: any): OpTicketAppOp {
  const newTicket: OpTicketAppOp = {
    "Tipo de Ticket": parseTipoTicket(object.tipoTicket),
    Puesto: parseCampo(object.numPuesto, "Puesto"),
    Equipo: parseCampo(object.equipo, "Equipo"),
    Estado: parseCampo(object.estado, "Estado"),
    Observacion: parseCampo(object.observacion, "Observación"),
  };

  return newTicket;
}
