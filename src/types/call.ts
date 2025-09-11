import { BaseEntity, Timestamp } from './common';

// Enums moved from Lead entity
export enum CallStatus {
  NOT_CALLED = 'not_called',
  SCHEDULED_TIME = 'scheduled_time',
  NOT_INTERESTED = 'not_interested',
  NO_ANSWER = 'no_answer',
  BAD_TIMING = 'bad_timing', // Customer answered but requested callback/reschedule
  INVALID_NUMBER = 'invalid_number',
  SUCCESS = 'success'
}

// AppointmentStatus removed - CallStatus.SUCCESS indicates successful calls/appointments

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
  
  // Flag to track if this call has been executed (initiated via VAPI)
  called: boolean;
  
  // Scheduling fields (migrated from Lead)
  scheduledTime?: Timestamp;
  leadCallStatus?: CallStatus;
  
  // Appointment date (migrated from Lead) - status determined by leadCallStatus  
  appointmentScheduledDate?: Timestamp;
  
  // Notifications (migrated from Lead)
  agentNotified?: Record<string, any>;
  
  // Enhanced call summary (migrated from Lead)
  callSummary?: Record<string, any>;
}