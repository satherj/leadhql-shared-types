// Common enums shared between entities

export enum LeadSource {
  META = 'meta',
  GOOGLE = 'google'
}

export enum LeadStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  PURCHASED = 'purchased',
  FAILED = 'failed',
  EXPIRED = 'expired',
  REJECTED = 'rejected'
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP'
}

// Base type for all entities
export interface BaseEntity {
  id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

// Type for timestamp fields (used for consistent date handling between frontend/backend)
export type Timestamp = string | Date; 