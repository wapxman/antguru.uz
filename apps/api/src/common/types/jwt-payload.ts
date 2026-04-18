import type { UserRole } from '@antguru/types';

export type JwtPayload = {
  sub: string; // userId
  phone: string;
  roles: UserRole[];
};

export type AuthenticatedUser = JwtPayload;
