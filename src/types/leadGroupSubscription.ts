import { BaseEntity, Currency, Timestamp } from './common';

export enum LeadGroupSubscriptionStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  CANCELED = 'canceled',
  EXPIRED = 'expired'
}

export interface LeadGroupSubscription extends BaseEntity {
  organizationId: string;
  leadGroupId: number;
  status: LeadGroupSubscriptionStatus;
  startDate: Timestamp;
  endDate: Timestamp;
  budget: number;
  currency: Currency;
  leadsReceived: number;
  leadsLimit?: number;
  metadata?: Record<string, any>;
} 