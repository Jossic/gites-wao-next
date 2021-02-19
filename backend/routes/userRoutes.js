import express from 'express';
const router = express.Router();

import {
	authUser,
	registerUser,
	logout,
	getAllUsers,
	getUserById,
	removeUser,
	updateUser,
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.post('/admin/login', authUser);
router.post('/admin/logout', logout);

//Public
router.post('/user', protect, admin, registerUser);

//Admin
router.get('/user', protect, admin, getAllUsers);
router.get('/user/:id', protect, admin, getUserById);
router.delete('/user/:id', protect, admin, removeUser);
router.put('/user/:id', protect, admin, updateUser);

export default router;
