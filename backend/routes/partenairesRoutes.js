import express from 'express';
const router = express.Router();
import {
	updatePartenaire,
	removePartenaire,
	createPartenaire,
	// getPartenairesByCategorie,
	getAllPartenaires,
	getPartenaireById,
	createPartenaireCard,
} from '../controllers/partenairesController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Public
router.get('/divers/partenaires', getAllPartenaires);

//Admin
router.get('/divers/partenaire/:id', protect, admin, getPartenaireById);
router.post('/divers/partenaire', protect, admin, createPartenaire);
router.put('/divers/partenaire/:id', protect, admin, updatePartenaire);
router.delete('/divers/partenaire/:id', protect, admin, removePartenaire);

//Card
router.post(
	'/divers/partenaire/:id/card',
	protect,
	admin,
	createPartenaireCard
);

export default router;
