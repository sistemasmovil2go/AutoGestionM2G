import { Router } from "express";
import {
  getAgenteByIdController,
  getAgentesController,
} from "../controllers/agente.controller";

const router = Router();

router.get("/agente", getAgentesController);

router.get("/agente/:num", getAgenteByIdController);

export default router;
