import { 
  BaseEntity, 
  Currency, 
  LeadSource, 
  LeadStatus, 
  Timestamp,
  CallStatus,
  InterestLevel,
  LeadPropertyType,
  AppointmentStatus
} from './common';

export interface LeadCalling {
  callStatus: CallStatus;
  lastCallDate?: Timestamp;
  totalCallDuration: number;
  callCost: number;
  recordingUrl?: string;
  callAttempts: number;
  scheduledCallTimestamp?: Timestamp;
  interestLevel?: InterestLevel;
  propertyType?: LeadPropertyType;
  budgetRange?: string;
  timeline?: string;
  locationPreference?: string;
  callSummary?: Record<string, any>;
  appointmentStatus?: AppointmentStatus;
  appointmentScheduledDate?: Timestamp;
  agentNotified?: Record<string, any>;
}

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
  leadCalling: LeadCalling;
} 