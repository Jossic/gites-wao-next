//Modele de base
import express from 'express';
const router = express.Router();
import {
	updateLien,
	removeLien,
	createLien,
	getLiensByCategorie,
	getAllLiens,
	getLienById,
} from '../controllers/pagesController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// Alentours
//Public
router.get('/divers/alentours', getAllLiens);
router.get('/divers/alentourss/:categorie', getLiensByCategorie);

//Admin
router.get('/divers/alentours/:id', protect, admin, getLienById);
router.post('/divers/alentours', protect, admin, createLien);
router.put('/divers/alentours/:id', protect, admin, updateLien);
router.delete('/divers/alentours/:id', protect, admin, removeLien);

export default router;
