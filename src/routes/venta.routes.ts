import { Router } from "express";
import {
  getVentaByIdController,
  // getVentasController,
} from "../controllers/venta.controller";
import { Usuario } from "../entities/usuario";

const router = Router();

router.get("/", (_, res) => res.send("<h1>Proyecto de Autogestión M2G</h1>"));

router.get("/asesor", async (_req, res) => {
  const usuarios = await Usuario.find();
  res.send(usuarios);
});

// router.get("/asesor/:identificacion", getVentasController);

router.get("/asesor/:id_venta", getVentaByIdController);

export default router;
