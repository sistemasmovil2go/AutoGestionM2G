import express from "express";
import morgan from "morgan";
import ventasRoutes from "./routes/venta.routes";
import agentesRoutes from "./routes/agente.routes";
import ticketsRoutes from "./routes/ticket.routes";

const app = express();

app.use(morgan("dev"));
app.use(ventasRoutes);
app.use(agentesRoutes);
app.use(ticketsRoutes);
app.use(express.json());

export default app;
