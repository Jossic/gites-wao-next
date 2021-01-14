import express from 'express';
const router = express.Router();

import { authUser, registerUser } from '../controllers/userController.js';

router.route('/admin').post(registerUser);
router.post('/admin/login', authUser);

export default router;
