import { Router } from "express";
import {
  getAgenteByPuestoController,
  getAgentesController,
} from "../controllers/agente.controller";

const router = Router();

router.get("/asesor", getAgentesController);

router.get("/asesor/:puesto", getAgenteByPuestoController);

export default router;
