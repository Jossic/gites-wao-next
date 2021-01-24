import express from 'express';
const router = express.Router();
import {
	savePhoto,
	saveFile,
	savePhotoData,
} from '../controllers/uploadController.js';
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
router.post('/upload-image-data', protect, admin, savePhotoData);
// router.put('/upload-files', protect, admin, uploadS3.single('pdf'), saveFile);

export default router;
