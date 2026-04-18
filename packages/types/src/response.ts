import { z } from 'zod';

export const ResponseStatusSchema = z.enum(['PENDING', 'ACCEPTED', 'DECLINED', 'WITHDRAWN']);
export type ResponseStatus = z.infer<typeof ResponseStatusSchema>;

export const ResponseSchema = z.object({
  id: z.string(),
  orderId: z.string(),
  specialistId: z.string(),
  message: z.string().min(1),
  priceMinor: z.bigint().nullable(),
  status: ResponseStatusSchema,
  feeMinor: z.bigint(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Response = z.infer<typeof ResponseSchema>;
