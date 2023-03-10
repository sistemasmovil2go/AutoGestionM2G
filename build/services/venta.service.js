"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVentaById = exports.getVentaAsesor = void 0;
const venta_1 = require("../models/venta");
const typeorm_1 = require("typeorm");
async function getVentaAsesor(identificacion) {
    const venta = await venta_1.Venta.find({ where: { identificacion } });
    return venta;
}
exports.getVentaAsesor = getVentaAsesor;
async function getVentaById(id) {
    const venta = await venta_1.Venta.findOneBy({
        idVentaCabecera: id,
        estadoVenta: (0, typeorm_1.Not)("Eliminado"),
    });
    if (!venta)
        throw new Error("No se ha encontrado niguna venta con ese identificador");
    formatDate(venta);
    return venta;
}
exports.getVentaById = getVentaById;
function formatDate(venta) {
    const fecha = venta.fechaIngreso.toISOString().split("T")[0];
    venta.fechaIngreso = fecha;
    return venta;
}
//# sourceMappingURL=venta.service.js.map