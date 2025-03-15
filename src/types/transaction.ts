import { BaseEntity, Currency } from './common';

export enum TransactionType {
  RECHARGE = 'recharge',
  PURCHASE = 'purchase',
  REFUND = 'refund'
}

export enum TransactionStatus {
  COMPLETED = 'completed',
  PENDING = 'pending',
  FAILED = 'failed'
}

export interface Transaction extends BaseEntity {
  organizationId?: string;
  type?: TransactionType;
  transactionType: string;
  status: string;
  referenceId?: string;
  amount: number | string;
  currency: Currency;
  description?: string;
  metadata?: Record<string, any>;
  stripePaymentIntentId?: string;
  leadId?: number;
  receiptUrl?: string;
} 