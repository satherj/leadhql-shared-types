import { BaseEntity } from './common';

export interface SubscriptionLanguagePreference extends BaseEntity {
  organizationId: string;
  leadGroupId: number;
  languages: string[];
} 