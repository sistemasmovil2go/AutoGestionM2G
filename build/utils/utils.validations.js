"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isTipoTicket = void 0;
const constants_1 = require("../constants");
const isTipoTicket = (string) => constants_1.listaTipoTickets.includes(string);
exports.isTipoTicket = isTipoTicket;
const isString = (string) => string instanceof String || typeof string === "string";
exports.isString = isString;
//# sourceMappingURL=utils.validations.js.map