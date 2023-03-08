import { Router } from "express";
import {
  getVentaByIdController,
  // getVentasController,
} from "../controllers/venta.controller";
import { Usuario } from "../models/usuario";

const router = Router();

router.get("/", (_, res) => res.send("<h1>Proyecto de Autogestión M2G</h1>"));

router.get("/user", async (_req, res) => {
  const usuarios = await Usuario.find();
  res.send(usuarios);
});

// router.get("/asesor/:identificacion", getVentasController);

router.get("/venta/:id_venta", getVentaByIdController);

export default router;
