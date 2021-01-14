import express from 'express';
const router = express.Router();
import { getGites } from '../controllers/giteController.js';

router.get('/');
router.get('/gite/:nom', getGites);

export default router;
