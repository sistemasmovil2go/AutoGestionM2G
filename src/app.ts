import express from "express";
import morgan from "morgan";
import ventasRoutes from "./routes/ventas.routes";

const app = express();

app.use(morgan("dev"));
app.use(ventasRoutes);
app.use(express.json());

export default app;
