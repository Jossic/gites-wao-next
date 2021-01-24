import express from 'express';
const router = express.Router();
import {
	getGites,
	getGiteByNom,
	createGite,
	updateGite,
	deleteGite,
	getGitesNoms,
	savePhoto,
	saveFile,
} from '../controllers/giteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { uploadS3 } from '../middleware/uploadMiddleware.js';

// Routes espaces admin

router.post(
	'/upload-image',
	protect,
	admin,
	uploadS3.single('photo'),
	savePhoto
);
// router.put('/upload-files', protect, admin, uploadS3.single('pdf'), saveFile);

export default router;
