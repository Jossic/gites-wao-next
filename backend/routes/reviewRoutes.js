import express from 'express';
const router = express.Router();
import {
	getAllReviews,
	getReviewById,
	createReview,
	updateReview,
	removeReview,
	getReviewsByGites,
} from '../controllers/reviewController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Public
router.get('/reviews', getAllReviews);
router.get('/reviews/:slug', getReviewsByGites);

//Admin
router.get('/review/:id', protect, admin, getReviewById);
router.post('/review', protect, admin, createReview);
router.put('/review/:id', protect, admin, updateReview);
router.delete('/review/:id', protect, admin, removeReview);

export default router;
