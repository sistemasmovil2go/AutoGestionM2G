import { Router } from "express";
import {
  getTicketsAsesorController,
  insertTicketController,
} from "../controllers/ticket.controller";

const router = Router();

router.get("/ticket/:puesto", getTicketsAsesorController);

router.post("/ticket/:puesto", insertTicketController);

export default router;
