import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Пометь контроллер или метод как публичный — JwtAuthGuard его пропустит.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
