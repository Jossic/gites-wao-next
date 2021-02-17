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
router.get('/mailer', getAllMailers);
router.get('/mailer/:id', getMailerById);
router.post('/mailer', createMailer);
router.delete('/mailer/:id', protect, admin, removeMailer);
router.put('/mailer/:id', protect, admin, updateMailer);
router.put('/mailer/:id/vu', protect, admin, setVu);

export default router;
