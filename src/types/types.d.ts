// import { FieldSet } from "airtable";
import { tipoDeTicket } from "../constants";

type tipoTicket = typeof tipoDeTicket[number];

export interface TicketOperaciones {
  tipoTicket: tipoTicket;
  clienteDesancle: string;
  identificacionDesancle: string;
  numPuesto: string;
  equipo: string;
  observacion: string;
  estado: string;
  id_venta_cabecera: number;
  identificacion: string;
  nombre_completo: string;
  num_solicitud: string;
  distribuidor: string;
  num_portar: string;
  estado_venta: string;
  sub_estado_venta: string;
  fecha_ingreso: Date;
  ciclo_pago: string;
  fecha_operativa: Date;
  asesor: string;
  perfil_asesor: string;
  supervisor: string;
  serv_nivel3: string;
  serv_nivel2: string;
  serv_nivel1: string;
}
