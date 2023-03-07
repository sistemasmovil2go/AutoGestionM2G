"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasController = void 0;
const ventas_service_1 = require("../services/ventas.service");
async function ventasController(req, res) {
    try {
        const idAsesor = Number(req.params.id);
        const ventas = await (0, ventas_service_1.getVentasAsesor)(idAsesor);
        res.status(200).send(ventas);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}
exports.ventasController = ventasController;
//# sourceMappingURL=ventas.controller.js.map