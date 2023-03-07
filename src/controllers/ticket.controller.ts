import { Request, Response } from "express";
import { getTicketsAsesor } from "../services/ticket.service";

export async function getTicketsAsesorController(
  _req: Request,
  res: Response
): Promise<void> {
  try {
    const tickets = await getTicketsAsesor();

    res.status(200).send(tickets);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
