export interface Agent {
  // Combined fields from Clerk user
  first_name: string | null;
  last_name: string | null;
  image_url: boolean;

  // Fields from agent entity
  id: string; // This is the Clerk user ID
  organizationId: string;
  displayEmail: string | null;
  phoneNumber: string | null;
  whatsappNumber: string | null;
  description: string | null;
  title: string | null;
  isActive: boolean;
  additionalInfo: Record<string, any> | null;
  createdAt: Date;
  updatedAt: Date;
} 