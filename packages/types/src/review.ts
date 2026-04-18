import { z } from 'zod';

export const ReviewSchema = z.object({
  id: z.string(),
  orderId: z.string(),
  authorId: z.string(),
  targetId: z.string(),
  rating: z.number().int().min(1).max(5),
  text: z.string().nullable(),
  createdAt: z.coerce.date(),
});
export type Review = z.infer<typeof ReviewSchema>;
