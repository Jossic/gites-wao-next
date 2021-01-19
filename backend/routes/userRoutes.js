import express from 'express';
const router = express.Router();

import {
	authUser,
	registerUser,
	logout,
} from '../controllers/userController.js';

router.route('/admin').post(registerUser);
router.post('/admin/login', authUser);
router.post('/admin/logout', logout);

export default router;
