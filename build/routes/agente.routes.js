"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agente_controller_1 = require("../controllers/agente.controller");
const router = (0, express_1.Router)();
router.get("/asesor", agente_controller_1.getAgentesController);
router.get("/asesor/:puesto", agente_controller_1.getAgenteByPuestoController);
exports.default = router;
//# sourceMappingURL=agente.routes.js.map