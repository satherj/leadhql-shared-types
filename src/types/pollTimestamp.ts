import { BaseEntity, Timestamp } from './common';

export enum PollType {
  META_LEADS = 'meta_leads',
  GOOGLE_LEADS = 'google_leads'
}

export interface PollTimestamp extends BaseEntity {
  type: PollType;
  lastPollAt: Timestamp;
  metadata?: Record<string, any>;
} 