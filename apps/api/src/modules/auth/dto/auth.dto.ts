import { z } from 'zod';

import { PhoneSchema } from '@antguru/types';

export const SendCodeSchema = z.object({
  phone: PhoneSchema,
});
export type SendCodeDto = z.infer<typeof SendCodeSchema>;

export const VerifyCodeSchema = z.object({
  phone: PhoneSchema,
  code: z.string().length(4, 'Код должен быть 4 цифры'),
});
export type VerifyCodeDto = z.infer<typeof VerifyCodeSchema>;

export const RefreshTokenSchema = z.object({
  refreshToken: z.string().min(10),
});
export type RefreshTokenDto = z.infer<typeof RefreshTokenSchema>;
