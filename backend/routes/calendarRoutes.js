import express from 'express';
const router = express.Router();
import {
	getEvents,
	getVacances,
	getDejaLoue,
} from '../controllers/calendarController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Admin
router.get('/calendar/:calendarId/:dateDebut/:dateFin', getEvents);
router.get('/calendar/loue/:calendarId/:dateDebut/:dateFin', getDejaLoue);
router.get('/calendar/:dateDebut/:dateFin', getVacances);

export default router;
