// services/lanceService.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface CreateLanceInput {
  valor: number;
  compradorId: number;
  leilaoId: number;
}

const LanceService = {
  getAllLances: async () => {
    return await prisma.lance.findMany();
  },

  createLance: async (input: CreateLanceInput) => {
    return await prisma.lance.create({
      data: input,
    });
  },

};

export default LanceService;
