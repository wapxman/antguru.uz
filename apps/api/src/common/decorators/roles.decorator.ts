import { SetMetadata } from '@nestjs/common';
import type { UserRole } from '@antguru/types';

export const ROLES_KEY = 'roles';

/**
 * Требует одну из указанных ролей. Работает в связке с RolesGuard.
 */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
