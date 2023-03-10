import { FieldSet } from "airtable";
import { Ticket } from "../models/ticket";
import { OpTicketAppOp, OpTicket } from "../types/types";
import { getAgenteByPuesto } from "./agente.service";
import { getVentaById } from "./venta.service";

const ticket = new Ticket().getOpTickets();

async function hasInsertPermission(
  puesto: string,
  nombreAsesorFromVenta: string
): Promise<boolean> {
  const nombreAsesor: string = (await getAgenteByPuesto(puesto)).name;

  return nombreAsesor === nombreAsesorFromVenta;
}

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

export async function insertAppOpTicket(
  newOpTicket: OpTicketAppOp,
  idVenta: number,
  puesto: string
) {
  const venta = await getVentaById(idVenta);
  const permission = await hasInsertPermission(puesto, venta.asesor);

  // TODO
  // -Aqui debo validar con la venta en lugar de con el body que se envía desde el frontend
  if (!permission) {
    throw new Error("No tienes permiso para insertar ticket sobre esta venta");
  }

  console.log(venta.estadoVenta, venta.fechaOperativa);

  if (!(venta.estadoVenta === "Aprobado" && venta.fechaOperativa !== null)) {
    throw new Error(
      "Esta venta no cumple los requisitos para pasar de APP a OP"
    );
  }

  const newOpTicketWithVenta = {
    ...newOpTicket,
    ...venta,
  } as unknown as FieldSet;

  console.log(newOpTicketWithVenta);

  return await ticket.create(newOpTicketWithVenta, { typecast: true });
}

export async function insertDesancleTicket(newOpTicket: OpTicket) {
  return await ticket.create(newOpTicket, { typecast: true });
}
