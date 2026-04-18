import { z } from 'zod';

export const PaymentTypeSchema = z.enum([
  'TOPUP',
  'WITHDRAWAL',
  'RESPONSE_FEE',
  'COMMISSION',
  'REFUND',
]);
export type PaymentType = z.infer<typeof PaymentTypeSchema>;

export const PaymentStatusSchema = z.enum(['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED']);
export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;

export const PaymentProviderSchema = z.enum(['PAYME', 'CLICK', 'INTERNAL']);
export type PaymentProvider = z.infer<typeof PaymentProviderSchema>;

export const PaymentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  orderId: z.string().nullable(),
  type: PaymentTypeSchema,
  amountMinor: z.bigint(),
  currency: z.string(),
  status: PaymentStatusSchema,
  provider: PaymentProviderSchema,
  providerTxId: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Payment = z.infer<typeof PaymentSchema>;
