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
exports.Agente = void 0;
const typeorm_1 = require("typeorm");
let Agente = class Agente extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "id" }),
    __metadata("design:type", Number)
], Agente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "number" }),
    __metadata("design:type", String)
], Agente.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name" }),
    __metadata("design:type", String)
], Agente.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "estatus" }),
    __metadata("design:type", String)
], Agente.prototype, "estatus", void 0);
Agente = __decorate([
    (0, typeorm_1.Entity)({
        database: "gestion_bd",
        name: "agent",
        synchronize: false,
    })
], Agente);
exports.Agente = Agente;
//# sourceMappingURL=agente.js.map