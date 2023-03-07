"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const typeorm_1 = require("typeorm");
let Venta = class Venta extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "id_venta_cabecera" }),
    __metadata("design:type", Number)
], Venta.prototype, "idVentaCabecera", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "identificacion" }),
    __metadata("design:type", String)
], Venta.prototype, "identificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_completo" }),
    __metadata("design:type", String)
], Venta.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "num_solicitud" }),
    __metadata("design:type", String)
], Venta.prototype, "numSolicitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "distribuidor" }),
    __metadata("design:type", String)
], Venta.prototype, "distribuidor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "num_portar" }),
    __metadata("design:type", String)
], Venta.prototype, "numPortar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "estado_venta" }),
    __metadata("design:type", String)
], Venta.prototype, "estadoVenta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sub_estado_venta" }),
    __metadata("design:type", String)
], Venta.prototype, "subEstadoVenta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_ingreso", type: "datetime" }),
    __metadata("design:type", Date)
], Venta.prototype, "fechaIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ciclo_pago" }),
    __metadata("design:type", String)
], Venta.prototype, "cicloPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_operativa", type: "date" }),
    __metadata("design:type", Date)
], Venta.prototype, "fechaOperativa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "asesor" }),
    __metadata("design:type", String)
], Venta.prototype, "asesor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "perfil_asesor" }),
    __metadata("design:type", String)
], Venta.prototype, "perfilAsesor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "supervisor" }),
    __metadata("design:type", String)
], Venta.prototype, "supervisor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "serv_nivel3" }),
    __metadata("design:type", String)
], Venta.prototype, "servNivel3", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "serv_nivel2" }),
    __metadata("design:type", String)
], Venta.prototype, "servNivel2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "serv_nivel1" }),
    __metadata("design:type", String)
], Venta.prototype, "servNivel1", void 0);
Venta = __decorate([
    (0, typeorm_1.Entity)({
        name: "resumen_ventas_general",
        schema: "dbo",
    })
], Venta);
exports.Venta = Venta;
//# sourceMappingURL=venta.js.map