import { BaseEntity } from './common';

export interface ZapierApiKey extends BaseEntity {
  organizationId: string;
  apiKey: string;
  name: string;
  isActive: boolean;
} 