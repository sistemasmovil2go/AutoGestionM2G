"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
const router = (0, express_1.Router)();
router.get("/ticket", ticket_controller_1.getTicketsAsesorController);
router.post("/ticket");
exports.default = router;
//# sourceMappingURL=ticket.routes.js.map