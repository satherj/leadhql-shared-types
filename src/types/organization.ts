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

export interface BrandingSettings {
  brandingName?: string;
  brandingDescription?: string;
  brandingLogoLightUrl?: string;
  brandingLogoDarkUrl?: string;
  brandingWebsite?: string;
  brandingEmail?: string;
  brandingPhone?: string;
}

export interface Organization extends BaseEntity {
  name: string;
  clerkOrgId: string;
  currentBalance: number;
  hqlSyncEnabled: boolean;
  subscription: Subscription;
  billingSettings: BillingSettings;
  brandingSettings: BrandingSettings;
} 