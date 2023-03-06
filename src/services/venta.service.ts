import { Venta } from "../entities/venta";

export async function getVentas(identificacion: string): Promise<Venta[]> {
  const venta = await Venta.find({ where: { identificacion } });
  return venta;
}

export async function getVentaById(id: number): Promise<Venta[]> {
  const venta = await Venta.find({ where: { idVentaCabecera: id } });
  return venta;
}
