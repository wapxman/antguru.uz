import { z } from 'zod';

export const VerificationStatusSchema = z.enum(['PENDING', 'VERIFIED', 'REJECTED']);
export type VerificationStatus = z.infer<typeof VerificationStatusSchema>;

export const SpecialistProfileSchema = z.object({
  id: z.string(),
  userId: z.string(),
  bio: z.string().nullable(),
  city: z.string().nullable(),
  verification: VerificationStatusSchema,
  rating: z.number().min(0).max(5),
  reviewsCount: z.number().int().min(0),
  // BigInt из Prisma приходит как bigint в JS; в JSON сериализуем в string на границе.
  balanceMinor: z.bigint(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type SpecialistProfile = z.infer<typeof SpecialistProfileSchema>;
