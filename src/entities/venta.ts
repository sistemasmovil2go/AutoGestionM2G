import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: "resumen_ventas_general",
  schema: "dbo",
})
export class Venta extends BaseEntity {
  @PrimaryColumn({ name: "id_venta_cabecera" })
  idVentaCabecera: number;

  @Column({ name: "identificacion" })
  identificacion: string;

  @Column({ name: "nombre_completo" })
  cliente: string;

  @Column({ name: "num_solicitud" })
  numSolicitud: string;

  @Column({ name: "distribuidor" })
  distribuidor: string;

  @Column({ name: "num_portar" })
  numPortar: string;

  @Column({ name: "estado_venta" })
  estadoVenta: string;

  @Column({ name: "sub_estado_venta" })
  subEstadoVenta: string;

  @Column({ name: "fecha_ingreso", type: "datetime" })
  fechaIngreso: Date;

  @Column({ name: "ciclo_pago" })
  cicloPago: string;

  @Column({ name: "fecha_operativa" })
  fechaOperativa: Date;

  @Column({ name: "asesor" })
  asesor: string;

  @Column({ name: "perfil_asesor" })
  perfilAsesor: string;

  @Column({ name: "supervisor" })
  supervisor: string;

  @Column({ name: "serv_nivel3" })
  servNivel3: string;

  @Column({ name: "serv_nivel2" })
  servNivel2: string;

  @Column({ name: "serv_nivel1" })
  servNivel1: string;
}
