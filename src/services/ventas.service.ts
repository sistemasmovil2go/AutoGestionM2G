import { Venta } from "../entities/venta";

export async function getVentasAsesor(idAsesor: number): Promise<Venta[]> {
  const venta = await Venta.find({ where: { idUserIngreso: idAsesor } });

  return venta;
}
