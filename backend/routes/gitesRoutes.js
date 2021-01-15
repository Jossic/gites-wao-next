import express from 'express';
const router = express.Router();
import {
	getGites,
	getGiteByNom,
	createGite,
	updateGite,
} from '../controllers/giteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/');
router.get('/gite/', getGites);
router.get('/gite/:slug', getGiteByNom);

// Routes espaces admin
router.post('/gite', protect, admin, createGite);
router.put('/gite/:slug', protect, admin, updateGite);

export default router;
