import { Ticket } from "../models/ticket";

export async function getTicketsAsesor() {
  const ticket = new Ticket();

  return await ticket.getSysTickets();
}
