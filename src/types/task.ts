import { Timestamp } from './common';

export enum TaskStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export interface Task {
  id: string;
  organizationId: string;
  leadId: number;
  ownerId: string;
  createdBy: string;
  title: string;
  description?: string;
  dueDate?: Timestamp;
  status: TaskStatus;
  completedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
