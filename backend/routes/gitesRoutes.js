import express from 'express';
const router = express.Router();
import {
	getGites,
	getGiteByNom,
	createGite,
	updateGite,
	deleteGite,
	getGitesNoms,
} from '../controllers/giteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { uploadS3 } from '../middleware/uploadMiddleware.js';

router.get('/');
router.get('/gites', getGites);
router.get('/gites/noms', getGitesNoms);
router.get('/gite/:slug', getGiteByNom);

// Routes espaces admin
router.post('/gite', protect, admin, createGite);
router.put('/gite/:slug', protect, admin, uploadS3.array('photos'), updateGite);
router.delete('/gite/:slug', protect, admin, deleteGite);

export default router;
