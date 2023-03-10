"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
const router = (0, express_1.Router)({ caseSensitive: true });
router.get("/ticket/:puesto", ticket_controller_1.getTicketsAsesorController);
router.post("/ticket/:puesto", ticket_controller_1.insertTicketController);
router.post("/ticket/appOp/:puesto/:idVenta", ticket_controller_1.insertTicketAppOpController);
router.post("/ticket/desancle/:puesto/", ticket_controller_1.insertTicketDesancleController);
exports.default = router;
//# sourceMappingURL=ticket.routes.js.map