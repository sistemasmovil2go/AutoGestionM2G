import { FieldSet } from "airtable";
import { Ticket } from "../models/ticket";
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
  const aIngresar = await ticket.create(opTicket, {
    typecast: true,
  });

  return aIngresar;
}
