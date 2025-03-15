import { BaseEntity, Currency } from './common';

export interface PriceSettings extends BaseEntity {
  name: string;
  description?: string;
  basePrice: number;
  baseCurrency: Currency;
  isActive: boolean;
  metadata?: Record<string, any>;
} 