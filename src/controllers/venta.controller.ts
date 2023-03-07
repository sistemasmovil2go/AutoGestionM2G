import { Request, Response } from "express";
import { getVentaById, getVentaAsesor } from "../services/venta.service";

export async function getVentasController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const identificacion = req.params.identificacion;

    const ventas = await getVentaAsesor(identificacion);
    res.status(200).send(ventas);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}

export async function getVentaByIdController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const idVenta = Number(req.params.id_venta);

    const venta = await getVentaById(idVenta);
    res.status(200).send(venta);
  } catch (e: any) {
    console.log(e.message);
    res.sendStatus(500);
  }
}
