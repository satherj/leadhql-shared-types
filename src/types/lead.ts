import { BaseEntity, Currency, LeadSource, LeadStatus, Timestamp } from './common';

export interface Lead extends BaseEntity {
  externalId?: string;
  source: LeadSource;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state?: string;
  country?: string;
  zipCode?: string;
  language?: string;
  sourceMetadata?: Record<string, any>;
  additionalInfo?: Record<string, any>;
  systemPurchaseAmount?: number;
  systemPurchaseCurrency?: Currency;
  userPurchaseAmount?: number;
  userPurchaseCurrency?: Currency;
  organizationId?: string;
  leadGroupId?: number;
  status: LeadStatus;
  purchasedAt?: Timestamp;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
} 