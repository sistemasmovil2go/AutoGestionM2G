import { Router } from "express";
import { ventasController } from "../controllers/ventas.controller";

const router = Router();

router.get("/asesor", (_req, res) => res.send(`<h1>Hola M2G<h1>`));

router.get("/asesor/:id", ventasController);

export default router;
