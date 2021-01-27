import express from 'express';
const router = express.Router();
import {
	getGites,
	getGiteByNom,
	createGite,
	updateGite,
	deleteGite,
	getGitesNoms,
	getAllPhotos,
	getAllQR,
	createQR,
	// updateQR,
	// deleteQR
} from '../controllers/giteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/');
router.get('/gites', getGites);
router.get('/gites/noms', getGitesNoms);
router.get('/gite/:slug', getGiteByNom);

// Routes espaces admin
router.post('/gite', protect, admin, createGite);
router.put('/gite/:slug', protect, admin, updateGite);
router.delete('/gite/:slug', protect, admin, deleteGite);
router.get('/photos', protect, admin, getAllPhotos);
router.get('/qr', protect, admin, getAllQR);
router.post('/qr', protect, admin, createQR);
// router.put('/qr', protect, admin, updateQR);
// router.delete('/qr', protect, admin, deleteQR);

export default router;
