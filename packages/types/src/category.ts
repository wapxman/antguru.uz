import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  nameRu: z.string(),
  nameUz: z.string(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  parentId: z.string().nullable(),
  sortOrder: z.number().int(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Category = z.infer<typeof CategorySchema>;
