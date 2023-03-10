import { Request, Response } from "express";
import { getAgenteByPuesto } from "../services/agente.service";
import {
  getTicketsAsesor,
  insertAppOpTicket,
  insertDesancleTicket,
  insertTicket,
} from "../services/ticket.service";
import {
  toNewOpTicketAppOp,
  toNewOpTicketDesancle,
} from "../utils/parseRequestBody";

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
    res.status(400).send({ msg: e.message });
  }
}

export async function insertTicketController(req: Request, res: Response) {
  try {
    const camposTicket = req.body;

    const response = await insertTicket(camposTicket);
    res.send(response);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).send({ msg: e.message });
  }
}

export async function insertTicketAppOpController(req: Request, res: Response) {
  try {
    const newTicket = toNewOpTicketAppOp(req.body);

    const response = await insertAppOpTicket(
      newTicket,
      Number(req.params.idVenta),
      req.params.puesto
    );
    res.send(response);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).send({ msg: e.message });
  }
}

export async function insertTicketDesancleController(
  req: Request,
  res: Response
) {
  try {
    const newTicket = toNewOpTicketDesancle(req.body);

    const response = await insertDesancleTicket(newTicket);
    res.send(response);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).send({ msg: e.message });
  }
}
