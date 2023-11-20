// index.ts
import express from 'express';
import dotenv from 'dotenv';
import routes from './Routes';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  try {
    await prisma.$connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});
