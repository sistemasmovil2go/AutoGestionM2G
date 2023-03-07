import { Column, Entity, BaseEntity, PrimaryColumn } from "typeorm";

@Entity({
  database: "gestion_bd",
  name: "agent",
  synchronize: false,
})
export class Agente extends BaseEntity {
  @PrimaryColumn({ name: "id" })
  id: number;

  @PrimaryColumn({ name: "number" })
  number: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "estatus" })
  estatus: "A" | "I";
}
