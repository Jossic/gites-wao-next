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
	getAllPartenaireCards,
	getPartenaireCardById,
	updatePartenaireCard,
	removePartenaireCard,
	getAllPartenairesNoms,
} from '../controllers/partenairesController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Card
//Public
router.get('/divers/partenaire/:id/cards', getAllPartenaireCards);

//Admin
router.get('/divers/partenaire/:id/card/:idCard', getPartenaireCardById);
router.post(
	'/divers/partenaire/:id/card',
	protect,
	admin,
	createPartenaireCard
);

router.put(
	'/divers/partenaire/:id/card/:idCard',
	protect,
	admin,
	updatePartenaireCard
);
router.delete(
	'/divers/partenaire/:id/card/:idCard',
	protect,
	admin,
	removePartenaireCard
);

//Public
router.get('/divers/partenaires', getAllPartenaires);
router.get('/divers/partenaires/noms', getAllPartenairesNoms);

//Admin
router.get('/divers/partenaire/:id', getPartenaireById);
router.post('/divers/partenaire', protect, admin, createPartenaire);
router.put('/divers/partenaire/:id', protect, admin, updatePartenaire);
router.delete('/divers/partenaire/:id', protect, admin, removePartenaire);

export default router;
