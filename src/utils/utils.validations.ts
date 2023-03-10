import { listaTipoTickets } from "../constants";

export const isTipoTicket = (string: any): boolean =>
  listaTipoTickets.includes(string);

export const isString = (string: any): boolean =>
  string instanceof String || typeof string === "string";
