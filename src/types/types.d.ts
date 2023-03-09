// import { FieldSet } from "airtable";
import { tipoDeTicket } from "../constants";
import { Venta } from "../models/venta";

type tipoTicket = typeof tipoDeTicket[number];

type TicketOperaciones = {
  tipoTicket: tipoTicket;
  clienteDesancle: string;
  identificacionDesancle: string;
  numPuesto: string;
  equipo: string;
  observacion: string;
  estado: string;
} & Venta;

export interface TicketOperaciones1 {
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
