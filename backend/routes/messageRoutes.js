import express from 'express';
const router = express.Router();
import {
	getAllMessages,
	getMessageById,
	createMessage,
	removeMessage,
} from '../controllers/messageController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Public
router.get('/message', getAllMessages);
router.get('/message/:id', getMessageById);

//Admin
router.post('/message', createMessage);
router.delete('/message/:id', protect, admin, removeMessage);

export default router;
