// controllers/lanceController.ts
import { Request, Response } from 'express';
import LanceService from '../Services/LanceService';

const LanceController = {
  getAllLances: async (_req: Request, res: Response) => {
    const lances = await LanceService.getAllLances();
    res.json(lances);
  },

  createLance: async (req: Request, res: Response) => {
    const { valor, compradorId, leilaoId } = req.body;
    const lance = await LanceService.createLance({ valor, compradorId, leilaoId });
    res.json(lance);
  },
 
};

export default LanceController;
