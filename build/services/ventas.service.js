"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVentasAsesor = void 0;
const ventas_1 = require("../entities/ventas");
async function getVentasAsesor(idAsesor) {
    const venta = await ventas_1.Venta.find({ where: { idUserIngreso: idAsesor } });
    return venta;
}
exports.getVentasAsesor = getVentasAsesor;
//# sourceMappingURL=ventas.service.js.map