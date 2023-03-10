// import { FieldSet } from "airtable";
import { listaTipoTickets } from "../constants";
import { Venta } from "../models/venta";

type tipoTicket = typeof listaTipoTickets[number];

export type OpTicket = {
  "Tipo de Ticket": tipoTicket;
  "Cliente Desancle": string;
  "Identificacion Desancle": string;
  Puesto: string;
  Equipo: string;
  Observacion: string;
  Estado: string;
};

export type OpTicketAppOp = Omit<
  OpTicket,
  "Cliente Desancle" | "Identificacion Desancle"
>;

// interface ITicketOperaciones {
//   tipoTicket: tipoTicket;
//   clienteDesancle: string;
//   identificacionDesancle: string;
//   numPuesto: string;
//   equipo: string;
//   observacion: string;
//   estado: string;
//   id_venta_cabecera: number;
//   identificacion: string;
//   nombre_completo: string;
//   num_solicitud: string;
//   distribuidor: string;
//   num_portar: string;
//   estado_venta: string;
//   sub_estado_venta: string;
//   fecha_ingreso: Date;
//   ciclo_pago: string;
//   fecha_operativa: Date;
//   asesor: string;
//   perfil_asesor: string;
//   supervisor: string;
//   serv_nivel3: string;
//   serv_nivel2: string;
//   serv_nivel1: string;
// }
