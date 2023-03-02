import { Column, Entity, BaseEntity, PrimaryColumn } from "typeorm";

@Entity({
  database: "gestion_bd",
  name: "consolidado_mayra",
  synchronize: false,
})
export class Numeros extends BaseEntity {
  @PrimaryColumn({ name: "NUMERO" })
  numero: string;

  @Column({ name: "NOMBRE" })
  nombre: string;

  @Column({ name: "IDENTIFICACION" })
  identificacion: string;
}
