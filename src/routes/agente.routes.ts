import { Router } from "express";
import {
  getAgenteByIdController,
  listAgentesController,
} from "../controllers/agente.controller";

const router = Router();

router.get("/agente", listAgentesController);

router.get("/agente/:num", getAgenteByIdController);

export default router;
