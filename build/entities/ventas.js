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
], Venta.prototype, "id_venta_cabecera", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_cliente" }),
    __metadata("design:type", String)
], Venta.prototype, "idCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "id_user_ingreso" }),
    __metadata("design:type", Number)
], Venta.prototype, "idUserIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "direccion_entrega" }),
    __metadata("design:type", String)
], Venta.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tipo_cta" }),
    __metadata("design:type", String)
], Venta.prototype, "tipoCuenta", void 0);
Venta = __decorate([
    (0, typeorm_1.Entity)({
        database: "SIPE_Negocio_Principal",
        name: "Venta_Cabecera",
        schema: "Venta",
        synchronize: false,
    })
], Venta);
exports.Venta = Venta;
//# sourceMappingURL=ventas.js.map