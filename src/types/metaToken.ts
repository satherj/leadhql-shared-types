import { BaseEntity, Timestamp } from './common';

export interface MetaToken extends BaseEntity {
  accessToken: string;
  tokenType: string;
  expiresAt: Timestamp;
  isActive: boolean;
} 