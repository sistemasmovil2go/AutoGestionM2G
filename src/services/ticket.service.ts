import { FieldSet } from "airtable";
import { Ticket } from "../models/ticket";
import { getVentaById } from "./venta.service";
// import { TicketOperaciones } from "../types/types";
const ticket = new Ticket().getOpTickets();

export async function getTicketsAsesor(asesor: string, puesto: string) {
  // let lista = []
  const opTickets = ticket.select({
    view: "API",
    // filterByFormula: `{asesor} = '${asesor}'`,
    filterByFormula: `AND( {asesor} = '${asesor}', {Num Puesto} = '${puesto}')`,
    // returnFieldsByFieldId: true,
  });
  return await opTickets.all();
}

export async function insertTicket(opTicket: FieldSet) {
  const aIngresar = await ticket.create(opTicket, { typecast: true });

  return aIngresar;
}

export async function insertAppOpTicket(opTicket: FieldSet, idVenta: number) {
  const { estadoVenta, fechaOperativa } = await getVentaById(idVenta);
  console.log(estadoVenta, fechaOperativa);

  // TODO
  // -Aqui debo validar con la venta en lugar de con el body que se envía desde el frontend

  if (estadoVenta === "Aprobado" && fechaOperativa !== null) {
    return await ticket.create(opTicket, { typecast: true });
  }

  throw new Error("Esta venta no cumple los requisitos para pasar de APP a OP");
}
// export async function insertDesancleTicket(opTicket: FieldSet) {}
