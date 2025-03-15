import { BaseEntity, Currency } from './common';

export interface FxRate extends BaseEntity {
  fromCurrency: Currency;
  toCurrency: Currency;
  rate: number;
  effectiveDate: string | Date;
} 