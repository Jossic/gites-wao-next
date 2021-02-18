import express from 'express';
const router = express.Router();
import {
	getAllClients,
	getClientById,
	removeClient,
	updateClient,
	sendEmail,
} from '../controllers/clientController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Public
// router.post('/client', createClient); //Inutile car créé avec reservation

//Admin
router.get('/client', protect, admin, getAllClients);
router.get('/client/:id', protect, admin, getClientById);
router.delete('/client/:id', protect, admin, removeClient);
router.put('/client/:id', protect, admin, updateClient);
router.put('/client/:id/mailer', protect, admin, sendEmail);

export default router;
