import { Request, Response } from "express";
import { getAgentes, getAgenteByPuesto } from "../services/agente.service";

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
export async function getAgenteByPuestoController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const numero = req.params.puesto;

    const agente = await getAgenteByPuesto(numero);
    res.status(200).send(agente);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
