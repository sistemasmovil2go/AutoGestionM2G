import { Request, Response } from "express";
import { FieldSet } from "airtable";
import { getAgenteByPuesto } from "../services/agente.service";
import { getTicketsAsesor, insertTicket } from "../services/ticket.service";

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
    res.sendStatus(500);
  }
}

export async function insertTicketController(req: Request, res: Response) {
  try {
    const puesto: string = req.params.puesto;
    const asesor: string = (await getAgenteByPuesto(puesto)).name;
    const camposTicket = req.body as FieldSet;
    if (asesor !== camposTicket.asesor) {
      res.sendStatus(403);
    }

    const response = await insertTicket(camposTicket);
    res.send(response);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
