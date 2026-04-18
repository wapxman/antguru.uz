import { z } from 'zod';
import { PhoneSchema } from './common';

export const UserRoleSchema = z.enum(['CLIENT', 'SPECIALIST', 'ADMIN']);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserSchema = z.object({
  id: z.string(),
  phone: PhoneSchema,
  name: z.string().nullable(),
  roles: z.array(UserRoleSchema),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type User = z.infer<typeof UserSchema>;
