import express from 'express';
const router = express.Router();
import {
	getAllMessages,
	getMessageById,
	createMessage,
	removeMessage,
	getNumberOfNewMessage,
} from '../controllers/messageController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Public
router.get('/message/count', getNumberOfNewMessage);
router.get('/message', getAllMessages);
router.get('/message/:id', getMessageById);
router.post('/message', createMessage);

//Admin
router.delete('/message/:id', protect, admin, removeMessage);

export default router;
