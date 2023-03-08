"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const venta_routes_1 = __importDefault(require("./routes/venta.routes"));
const agente_routes_1 = __importDefault(require("./routes/agente.routes"));
const ticket_routes_1 = __importDefault(require("./routes/ticket.routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(venta_routes_1.default);
app.use(agente_routes_1.default);
app.use(ticket_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map