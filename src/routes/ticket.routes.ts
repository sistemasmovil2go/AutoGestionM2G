import { Router } from "express";
import { getTicketsAsesorController } from "../controllers/ticket.controller";

const router = Router();

router.get("/ticket", getTicketsAsesorController);

router.post("/ticket");

export default router;
