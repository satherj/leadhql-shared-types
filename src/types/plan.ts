import { BaseEntity } from './common';

export enum BillingInterval {
  MONTH = 'month',
  YEAR = 'year'
}

export interface PlanFeature {
  name: string;
  description?: string;
  isHighlighted: boolean;
}

export interface PlanLimits {
  maxUsers?: number;
}

export interface Plan extends BaseEntity {
  name: string;
  description?: string;
  price: number;
  billingInterval: BillingInterval;
  stripePriceId: string;
  stripeProductId: string;
  features: PlanFeature[];
  limits: PlanLimits;
  isPopular: boolean;
  isActive: boolean;
} 