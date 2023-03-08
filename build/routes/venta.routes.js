"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_controller_1 = require("../controllers/venta.controller");
const usuario_1 = require("../models/usuario");
const router = (0, express_1.Router)();
router.get("/", (_, res) => res.send("<h1>Proyecto de Autogestión M2G</h1>"));
router.get("/user", async (_req, res) => {
    const usuarios = await usuario_1.Usuario.find();
    res.send(usuarios);
});
// router.get("/asesor/:identificacion", getVentasController);
router.get("/venta/:id_venta", venta_controller_1.getVentaByIdController);
exports.default = router;
//# sourceMappingURL=venta.routes.js.map