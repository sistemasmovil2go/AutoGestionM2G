import { Request, Response } from "express";
import { getVentasAsesor } from "../services/ventas.service";

export async function ventasController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const idAsesor = Number(req.params.id);

    const ventas = await getVentasAsesor(idAsesor);
    res.status(200).send(ventas);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
