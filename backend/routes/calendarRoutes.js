import express from 'express';
const router = express.Router();
import { getEvents, getVacances } from '../controllers/calendarController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Admin
router.get('/calendar/:calendarId/:dateDebut/:dateFin', getEvents);
router.get('/calendar/:dateDebut/:dateFin', getVacances);

export default router;
