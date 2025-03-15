import { BaseEntity, Timestamp } from './common';

export enum SubscriptionStatus {
  ACTIVE = 'active',
  PAST_DUE = 'past_due',
  CANCELED = 'canceled',
  INCOMPLETE = 'incomplete'
}

export enum BudgetType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}

export interface Subscription {
  planId: number;
  status: SubscriptionStatus;
  stripeSubscriptionId: string;
  currentPeriodEnd: Timestamp;
}

export interface BillingSettings {
  billingEnabled: boolean;
  autoRechargeEnabled: boolean;
  rechargeThreshold?: number;
  rechargeAmount?: number;
  paymentMethodId?: string;
}

export interface Organization extends BaseEntity {
  name: string;
  clerkOrgId: string;
  currentBalance: number;
  subscription: Subscription;
  billingSettings: BillingSettings;
} 