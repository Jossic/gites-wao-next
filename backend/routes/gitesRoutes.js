import express from 'express';
const router = express.Router();
import { getGites, getGiteByNom } from '../controllers/giteController.js';

router.get('/');
router.get('/gite/', getGites);
router.get('/gite/:slug', getGiteByNom);

export default router;
