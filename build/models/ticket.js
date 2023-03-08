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
        return this.opTickets;
    }
    async getSysTickets() {
        let tickets = this.sysTickets.select({
            view: "Gestión de Hoy",
            filterByFormula: "{Ticket} = 'Otro tipo de Soporte'",
        });
        return await tickets.all();
    }
}
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.js.map