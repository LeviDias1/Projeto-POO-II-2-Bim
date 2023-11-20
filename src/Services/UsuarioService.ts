// services/usuarioService.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface CreateUsuarioInput {
  nome: string;
  email: string;
}

const UsuarioService = {
  getAllUsuarios: async () => {
    return await prisma.usuario.findMany();
  },

  getUsuarioById: async (usuarioId: number) => {
    return await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });
  },

  createUsuario: async (input: CreateUsuarioInput) => {
    return await prisma.usuario.create({
      data: input,
    });
  },

};

export default UsuarioService;
