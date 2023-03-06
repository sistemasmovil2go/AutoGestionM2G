import express from "express";
import morgan from "morgan";
import ventasRoutes from "./routes/venta.routes";
import agenteRoutes from "./routes/agente.routes";

const app = express();

app.use(morgan("dev"));
app.use(ventasRoutes);
app.use(agenteRoutes);
app.use(express.json());

export default app;
