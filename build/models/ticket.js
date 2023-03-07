"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const airtable_config_1 = __importDefault(require("../config/airtable.config"));
class Ticket {
    constructor() {
        this.opTickets = airtable_config_1.default
            .base("appLeEYX6Rbnmfjma")
            .table("tblBAEipM6gaM4OrF");
        this.sysTickets = airtable_config_1.default
            .base("appSCgQWTOo1VHfND")
            .table("tbloVUe3X8FeclGtE");
    }
    getOpTickets() {
        const tickets = this.opTickets.select();
        return tickets;
    }
    async getSysTickets() {
        let tickets = [];
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
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.js.map