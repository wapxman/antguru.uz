import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var __antguruPrisma: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  globalThis.__antguruPrisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.__antguruPrisma = prisma;
}

export * from '@prisma/client';
