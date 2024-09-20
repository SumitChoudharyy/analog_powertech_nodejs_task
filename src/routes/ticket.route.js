import { Router } from "express";
import { createTicket } from "../controller/ticketController.js";
import { getAllTicket } from "../controller/ticketController.js";
import { getSingleTicket } from "../controller/ticketController.js";
import { updateTicket } from "../controller/ticketController.js";
import { deleteTicket } from "../controller/ticketController.js";

const router = Router();

router.route('/createTicket').post(createTicket);
router.route('/').get(getAllTicket);
router.route('/:ticketID').get(getSingleTicket);
router.route('/:ticketID').patch(updateTicket);
router.route('/:ticketID').delete(deleteTicket);


export default router;

