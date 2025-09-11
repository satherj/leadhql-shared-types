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

export enum InterestLevel {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  NONE = 'none'
}

export enum LeadPropertyType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  COMMERCIAL = 'commercial',
  LAND = 'land',
  OTHER = 'other'
}

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed'
}

// Base type for all entities
export interface BaseEntity {
  id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

// Type for timestamp fields (used for consistent date handling between frontend/backend)
export type Timestamp = string | Date; 