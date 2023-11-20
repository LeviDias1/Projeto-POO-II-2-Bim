// routes/lanceRoutes.ts
import express from 'express';
import LanceController from '../Controllers/LanceControllers';

const router = express.Router();

router.get('/', LanceController.getAllLances);
router.post('/', LanceController.createLance);


export default router;
