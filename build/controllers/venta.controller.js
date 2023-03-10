"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVentaByIdController = exports.getVentasController = void 0;
const venta_service_1 = require("../services/venta.service");
async function getVentasController(req, res) {
    try {
        const identificacion = req.params.identificacion;
        const ventas = await (0, venta_service_1.getVentaAsesor)(identificacion);
        res.status(200).send(ventas);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send({ msg: e.message });
    }
}
exports.getVentasController = getVentasController;
async function getVentaByIdController(req, res) {
    try {
        const idVenta = Number(req.params.id_venta);
        const venta = await (0, venta_service_1.getVentaById)(idVenta);
        res.status(200).send(venta);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send({ msg: e.message });
    }
}
exports.getVentaByIdController = getVentaByIdController;
//# sourceMappingURL=venta.controller.js.map