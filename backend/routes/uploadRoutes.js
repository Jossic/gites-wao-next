import express from 'express';
const router = express.Router();
import { savePhotosData, saveFile } from '../controllers/uploadController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { uploadS3, uploadAWSS3 } from '../middleware/uploadMiddleware.js';

// Routes espaces admin

router.post('/upload-images', protect, admin, uploadAWSS3);
router.put('/upload-images', protect, admin, savePhotosData);
// router.put('/upload-files', protect, admin, uploadS3.single('pdf'), saveFile);

export default router;
