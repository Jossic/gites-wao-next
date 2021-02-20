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
	getPhotosByNom,
	getPhotosBySection,
	getPhotoById,
	getGiteById,
} from '../controllers/giteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/');
router.get('/gites', getGites);
router.get('/gites/noms', getGitesNoms);
router.get('/gite/:slug', getGiteByNom);
router.get('/gite/id/:id', getGiteById);
router.get('/photos/:nom', getPhotosByNom);
router.get('/qr', getAllQR);
router.get('/photos', getAllPhotos);
router.get('/photo/:id', getPhotoById);
router.get('/photos/section/:section', getPhotosBySection);

// Routes espaces admin
router.post('/gite', protect, admin, createGite);
router.put('/gite/:id', protect, admin, updateGite);
router.delete('/gite/:slug', protect, admin, deleteGite);
router.get('/qr/:id', protect, admin, getQRById);
router.post('/qr', protect, admin, createQR);
router.put('/qr/:id', protect, admin, updateQR);
router.delete('/qr/:id', protect, admin, removeQR);

export default router;
