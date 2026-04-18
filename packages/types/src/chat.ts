import { z } from 'zod';

export const ChatThreadSchema = z.object({
  id: z.string(),
  orderId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type ChatThread = z.infer<typeof ChatThreadSchema>;

export const ChatMessageSchema = z.object({
  id: z.string(),
  threadId: z.string(),
  senderId: z.string(),
  text: z.string().min(1),
  readAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;
