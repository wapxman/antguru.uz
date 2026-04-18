import { z } from 'zod';

export const IdSchema = z.string().min(1);
export type Id = z.infer<typeof IdSchema>;

export const PhoneSchema = z
  .string()
  .regex(/^\+998\d{9}$/, 'Телефон должен быть в формате +998XXXXXXXXX');
export type Phone = z.infer<typeof PhoneSchema>;

export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});
export type Pagination = z.infer<typeof PaginationSchema>;
