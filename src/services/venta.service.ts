import { Venta } from "../models/venta";
import { Not } from "typeorm";

export async function getVentaAsesor(identificacion: string): Promise<Venta[]> {
  const venta = await Venta.find({ where: { identificacion } });
  return venta;
}

export async function getVentaById(id: number): Promise<Venta> {
  const venta = await Venta.find({
    where: { idVentaCabecera: id, estadoVenta: Not("Eliminado") },
  });
  return venta[0];
}
