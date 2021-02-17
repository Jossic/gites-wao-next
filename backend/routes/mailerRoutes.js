import express from 'express';
const router = express.Router();
import {
	getAllMailers,
	getMailerById,
	createMailer,
	removeMailer,
	updateMailer,
} from '../controllers/mailerController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Admin
router.get('/mailer', protect, admin, getAllMailers);
router.get('/mailer/:id', protect, admin, getMailerById);
router.post('/mailer', protect, admin, createMailer);
router.delete('/mailer/:id', protect, admin, removeMailer);
router.put('/mailer/:id', protect, admin, updateMailer);

export default router;
