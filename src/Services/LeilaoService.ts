// services/leilaoService.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface CreateLeilaoInput {
  produto: string;
  preco: number;
  dataLimite: Date;
  donoId: number;
}

const LeilaoService = {
  getAllLeiloes: async () => {
    return await prisma.leilao.findMany();
  },

  getLeilaoById: async (leilaoId: number) => {
    return await prisma.leilao.findUnique({
      where: { id: leilaoId },
    });
  },

  createLeilao: async (input: CreateLeilaoInput) => {
    return await prisma.leilao.create({
      data: input,
    });
  },
 
};

export default LeilaoService;
