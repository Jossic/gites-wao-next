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
	getQRById,
	updateQR,
	removeQR,
} from '../controllers/giteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/');
router.get('/gites', getGites);
router.get('/gites/noms', getGitesNoms);
router.get('/gite/:slug', getGiteByNom);
router.get('/qr', getAllQR);

// Routes espaces admin
router.post('/gite', protect, admin, createGite);
router.put('/gite/:slug', protect, admin, updateGite);
router.delete('/gite/:slug', protect, admin, deleteGite);
router.get('/photos', protect, admin, getAllPhotos);
router.get('/qr/:id', protect, admin, getQRById);
router.post('/qr', protect, admin, createQR);
router.put('/qr/:id', protect, admin, updateQR);
router.delete('/qr/:id', protect, admin, removeQR);

export default router;
