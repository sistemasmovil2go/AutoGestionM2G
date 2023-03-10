import { Router } from "express";
import {
  getTicketsAsesorController,
  insertTicketController,
  insertTicketAppOpController,
  insertTicketDesancleController,
} from "../controllers/ticket.controller";

const router = Router({ caseSensitive: true });

router.get("/ticket/:puesto", getTicketsAsesorController);

router.post("/ticket/:puesto", insertTicketController);

router.post("/ticket/appOp/:puesto/:idVenta", insertTicketAppOpController);

router.post("/ticket/desancle/:puesto/", insertTicketDesancleController);

export default router;
