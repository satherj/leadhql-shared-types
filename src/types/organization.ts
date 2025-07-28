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

export enum BrandingApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
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

export interface NotificationSetting {
  type: 'email' | 'whatsapp' | 'phone';
  value: string; // email address, phone number, or WhatsApp number
  enabled: boolean;
  isPrimary?: boolean; // optional flag to indicate primary notification method
  label?: string; // optional friendly name like "Main Office", "Support Team"
}

export interface BrandingSettings {
  brandingName?: string;
  brandingDescription?: string;
  brandingLogoLightUrl?: string;
  brandingLogoDarkUrl?: string;
  brandingWebsite?: string;
  brandingEmail?: string;
  brandingPhone?: string;

  // Location information
  countryCode?: string; // BCP 47 country code (e.g., 'US', 'CA', 'GB')
  city?: string;

  // Languages spoken (BCP 47 language codes)
  languagesSpoken?: string[]; // e.g., ['en-US', 'es-ES', 'fr-FR']

  // Scoring system booleans
  isLicensed: boolean;
  hasMlsAccess: boolean;
  offersBuyerRepresentation: boolean;
  offersSellerRepresentation: boolean;
  handlesRentals: boolean;
  offersPropertyManagement: boolean;

  // Additional useful data for comparison
  yearsInBusiness?: number;
  totalAgents?: number;
  averageRating?: number; // 0.0-5.0 scale
  totalReviews?: number;
  specializations?: string[]; // e.g., ['luxury', 'first-time-buyers', 'commercial', 'investment']

  // Overall score (0-100, calculated from booleans, experience, and ratings)
  overallScore: number;

  // Notification settings for call scheduling and other events
  notificationSettings?: NotificationSetting[];

  // Approval workflow fields
  approvalStatus?: BrandingApprovalStatus;
  rejectionReason?: string;
  approvedAt?: Timestamp;
  approvedByUserId?: string;
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