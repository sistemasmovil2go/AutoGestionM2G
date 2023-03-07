"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_controller_1 = require("../controllers/ventas.controller");
const router = (0, express_1.Router)();
router.get("/asesor", (_req, res) => res.send(`<h1>Hola M2G<h1>`));
router.get("/asesor/:id", ventas_controller_1.ventasController);
exports.default = router;
//# sourceMappingURL=ventas.routes.js.map