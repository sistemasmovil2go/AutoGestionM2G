import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  database: "SIPE_Negocio_Principal",
  name: "Venta_Cabecera",
  schema: "Venta",
  synchronize: false,
})
export class Venta extends BaseEntity {
  @PrimaryColumn({ name: "id_venta_cabecera" })
  id_venta_cabecera: number;

  @Column({ name: "id_cliente" })
  idCliente: string;

  @Column({ name: "id_user_ingreso" })
  idUserIngreso: number;

  @Column({ name: "direccion_entrega" })
  direccion: string;

  @Column({ name: "tipo_cta" })
  tipoCuenta: string;
}
