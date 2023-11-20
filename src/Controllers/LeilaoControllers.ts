// controllers/leilaoController.ts
import { Request, Response } from 'express';
import LeilaoService from '../Services/LeilaoService';

const LeilaoController = {
  getAllLeiloes: async (_req: Request, res: Response) => {
    const leiloes = await LeilaoService.getAllLeiloes();
    res.json(leiloes);
  },

  getLeilaoById: async (req: Request, res: Response) => {
    const leilaoId = parseInt(req.params.id, 10);
    const leilao = await LeilaoService.getLeilaoById(leilaoId);
    res.json(leilao);
  },

  createLeilao: async (req: Request, res: Response) => {
    const { produto, preco, dataLimite, donoId } = req.body;
    const leilao = await LeilaoService.createLeilao({ produto, preco, dataLimite, donoId });
    res.json(leilao);
  },
 
};

export default LeilaoController;
