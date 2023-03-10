import { Venta } from "../models/venta";
import { Not } from "typeorm";

export async function getVentaAsesor(identificacion: string): Promise<Venta[]> {
  const venta = await Venta.find({ where: { identificacion } });
  return venta;
}

export async function getVentaById(id: number): Promise<Venta> {
  const venta = await Venta.findOneBy({
    idVentaCabecera: id,
    estadoVenta: Not("Eliminado"),
  });

  if (!venta)
    throw new Error("No se ha encontrado niguna venta con ese identificador");

  formatDate(venta);

  return venta;
}

function formatDate(venta: Venta): Venta {
  const fecha = venta.fechaIngreso.toISOString().split("T")[0];
  venta.fechaIngreso = fecha as unknown as Date;

  return venta;
}
