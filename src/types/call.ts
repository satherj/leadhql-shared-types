import { BaseEntity, Timestamp } from './common';

export interface CallAnalysis {
  summary?: string;
  structuredData?: Record<string, any>;
  structuredDataMulti?: Array<Record<string, any>>;
  successEvaluation?: string;
}

export interface CallMessage {
  role: string;
  message: string;
  time: number;
  endTime?: number;
  secondsFromStart: number;
  duration?: number;
  source?: string;
  toolCalls?: Array<Record<string, any>>;
  toolCallId?: string;
  name?: string;
  result?: string;
  metadata?: Record<string, any>;
}

export interface WebhookEvent {
  eventType: string;
  timestamp: string;
  data: Record<string, any>;
}

export interface Call extends BaseEntity {
  vapiCallId: string;
  leadId?: number;
  organizationId: string;
  type?: string;
  status?: string;
  endedReason?: string;
  startedAt?: Timestamp;
  endedAt?: Timestamp;
  cost?: number;
  durationSeconds?: number;
  analysis?: CallAnalysis;
  recordingUrl?: string;
  messages?: CallMessage[];
  vapiData?: Record<string, any>;
  webhookEvents?: WebhookEvent[];
}