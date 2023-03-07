import { Request, Response } from "express";
import { getAgentes, getAgenteById } from "../services/agente.service";

export async function getAgentesController(
  _req: Request,
  res: Response
): Promise<void> {
  try {
    const agentes = await getAgentes();

    res.status(200).send(agentes);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
export async function getAgenteByIdController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const numero = req.params.num;

    const agente = await getAgenteById(numero);
    res.status(200).send(agente);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
