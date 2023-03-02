import { Venta } from "../entities/ventas";

export async function getVentasAsesor(idAsesor: number): Promise<Venta[]> {
  const venta = await Venta.find({ where: { idUserIngreso: idAsesor } });

  return venta;
}
