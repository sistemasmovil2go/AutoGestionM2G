import airtable from "../config/airtable.config";

export class Ticket {
  private opTickets = airtable
    .base("appLeEYX6Rbnmfjma")
    .table("tblBAEipM6gaM4OrF");
  private sysTickets = airtable
    .base("appSCgQWTOo1VHfND")
    .table("tbloVUe3X8FeclGtE");

  public getOpTickets() {
    const tickets = this.opTickets.select();
    return tickets;
  }
  public async getSysTickets() {
    let tickets: unknown[] = [];
    let x = this.sysTickets.select({
      // Selecting the first 3 records in Tareas Sistemas:
      view: "Gestión de Hoy",
      // returnFieldsByFieldId: true,
    });

    // .eachPage(
    //   function page(records, fetchNextPage) {
    //     // This function (`page`) will get called for each page of records.
    //     records.forEach(function (record) {
    //       tickets.push(record.fields);
    //     });

    //     // To fetch the next page of records, call `fetchNextPage`.
    //     // If there are more records, `page` will get called again.
    //     // If there are no more records, `done` will get called.
    //     fetchNextPage();
    //   },
    //   function done(err) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //   }
    // );
    console.log(tickets);
    console.log(await x.all());
    return await x.all();
  }
}
