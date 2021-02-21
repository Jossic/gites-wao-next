import express from 'express';
const router = express.Router();
import { getEvents } from '../controllers/calendarController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Admin
router.get('/calendar/:calendarId', protect, admin, getEvents);

export default router;
