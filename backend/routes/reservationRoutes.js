import express from 'express';
const router = express.Router();
import {
	getAllReservations,
	getReservationById,
	createReservation,
	createContract,
	removeReservation,
	updateReservation,
	getNumberOfNewReservation,
} from '../controllers/reservationController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Public
router.post('/reservation', createReservation);
router.get('/reservation/:id/contract', getReservationById);
router.put('/reservation/contract/:reservation', createContract);

//Admin
router.get('/reservation/count', getNumberOfNewReservation);
router.get('/reservation', protect, admin, getAllReservations);
router.get('/reservation/:id', protect, admin, getReservationById);
router.delete('/reservation/:id', protect, admin, removeReservation);
router.put('/reservation/:id', protect, admin, updateReservation);

export default router;
