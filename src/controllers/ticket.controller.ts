import { Request, Response } from "express";
import { FieldSet } from "airtable";
import { getAgenteByPuesto } from "../services/agente.service";
import {
  getTicketsAsesor,
  insertAppOpTicket,
  insertTicket,
} from "../services/ticket.service";

export async function getTicketsAsesorController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const puesto: string = req.params.puesto;
    const asesor: string = (await getAgenteByPuesto(puesto)).name;
    const tickets = await getTicketsAsesor(asesor, puesto);

    res.status(200).send(tickets);
  } catch (e: any) {
    console.log(e.message);
    res.status(500).send({ msg: e.message });
  }
}

export async function hasInsertPermission(
  puesto: string,
  nombreAsesorFromCampos: string
): Promise<boolean> {
  const nombreAsesor: string = (await getAgenteByPuesto(puesto)).name;

  return nombreAsesor === nombreAsesorFromCampos;
}

export async function insertTicketController(req: Request, res: Response) {
  try {
    const camposTicket = req.body as FieldSet;
    const permission = await hasInsertPermission(
      req.params.puesto,
      String(camposTicket.asesor)
    );

    if (!permission) {
      res.status(403).send({
        msg: "No tienes permiso para insertar ticket sobre esta venta",
      });
      return;
    }
    const response = await insertTicket(camposTicket);
    res.send(response);
  } catch (e: any) {
    console.log(e.message);
    res.status(500).send({ msg: e.message });
  }
}

export async function insertTicketAppOpController(req: Request, res: Response) {
  try {
    const camposTicket = req.body as FieldSet;
    const permission = await hasInsertPermission(
      req.params.puesto,
      String(camposTicket.asesor)
    );
    console.log(permission);

    if (!permission) {
      res.status(403).send({
        msg: "No tienes permiso para insertar ticket sobre esta venta",
      });
      return;
    }

    const response = await insertAppOpTicket(
      camposTicket,
      Number(req.params.idVenta)
    );
    res.send(response);
  } catch (e: any) {
    console.log(e.message);
    res.status(500).send({ msg: e.message });
  }
}

// export async function insertTicketDesancleController(
//   req: Request,
//   res: Response
// ) {

// }
