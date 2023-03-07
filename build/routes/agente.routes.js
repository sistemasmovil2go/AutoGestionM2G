"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agente_controller_1 = require("../controllers/agente.controller");
const router = (0, express_1.Router)();
router.get("/agente", agente_controller_1.getAgentesController);
router.get("/agente/:num", agente_controller_1.getAgenteByIdController);
exports.default = router;
//# sourceMappingURL=agente.routes.js.map