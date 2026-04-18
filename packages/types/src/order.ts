import { z } from 'zod';

export const OrderStatusSchema = z.enum([
  'DRAFT',
  'PUBLISHED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
]);
export type OrderStatus = z.infer<typeof OrderStatusSchema>;

export const BudgetTypeSchema = z.enum(['FIXED', 'NEGOTIABLE']);
export type BudgetType = z.infer<typeof BudgetTypeSchema>;

export const OrderSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  categoryId: z.string(),
  title: z.string().min(1),
  description: z.string().min(1),
  budgetMinor: z.bigint().nullable(),
  budgetType: BudgetTypeSchema,
  address: z.string().nullable(),
  lat: z.number().nullable(),
  lng: z.number().nullable(),
  scheduledAt: z.coerce.date().nullable(),
  status: OrderStatusSchema,
  selectedSpecialistId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Order = z.infer<typeof OrderSchema>;
