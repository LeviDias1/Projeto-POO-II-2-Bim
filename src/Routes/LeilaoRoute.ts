// routes/leilaoRoutes.ts
import express from 'express';
import LeilaoController from '../Controllers/LeilaoControllers';

const router = express.Router();

router.get('/', LeilaoController.getAllLeiloes);
router.get('/:id', LeilaoController.getLeilaoById);
router.post('/', LeilaoController.createLeilao);


export default router;
