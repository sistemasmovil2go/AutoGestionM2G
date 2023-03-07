import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: "dbo", name: "view_usuarios_verbose" })
export class Usuario extends BaseEntity {
  @PrimaryColumn({ name: "id_user" })
  idUser: number;

  @Column({ name: "nombre_usuario" })
  nombre: string;

  @Column({ name: "identificacion" })
  identificacion: string;
}
