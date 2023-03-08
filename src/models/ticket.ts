import airtable from "../config/airtable.config";

export class Ticket {
  private opTickets = airtable
    .base("appLeEYX6Rbnmfjma")
    .table("tblBAEipM6gaM4OrF");
  private sysTickets = airtable
    .base("appSCgQWTOo1VHfND")
    .table("tbloVUe3X8FeclGtE");

  public getOpTickets() {
    return this.opTickets;
  }

  public async getSysTickets() {
    let tickets = this.sysTickets.select({
      view: "Gestión de Hoy",
      filterByFormula: "{Ticket} = 'Otro tipo de Soporte'",
    });

    return await tickets.all();
  }
}
