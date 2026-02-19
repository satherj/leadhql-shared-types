import { Timestamp } from './common';

export interface Note {
  id: string;
  organizationId: string;
  leadId: number;
  authorId: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
