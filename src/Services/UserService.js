const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const UserService = {
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },

  getUserById: async (userId) => {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  },

 
};

module.exports = UserService;
