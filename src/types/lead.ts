import { 
  BaseEntity, 
  Currency, 
  LeadSource, 
  LeadStatus, 
  Timestamp
} from './common';

// LeadCalling interface removed - all call data moved to Call entity

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
  closeLeadId?: string;
  crmStatus?: CrmLeadStatus;
  ownerId?: string | null;
}

export enum CrmLeadStatus {
  LEAD = 'lead',
  POTENTIAL = 'potential',
  BAD_TIMING = 'bad_timing',
  CLIENT = 'client',
  UNQUALIFIED = 'unqualified',
} 