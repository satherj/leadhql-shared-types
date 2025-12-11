export interface Agent {
  id: string; // UUID (primary key)

  // Clerk link info
  clerkUserId: string | null; // Clerk user ID - null for standalone agents
  isClerkLinked: boolean; // Convenience field indicating if linked to Clerk

  // Name fields (snake_case for backwards compatibility)
  first_name: string | null;
  last_name: string | null;
  image_url: string; // Maps to avatarUrl

  // Name fields (camelCase - preferred)
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  avatarThumbnailUrl: string | null;

  // Other fields
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

/**
 * DTO for creating a Clerk-linked agent
 */
export interface CreateAgentDto {
  clerkUserId: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  displayEmail?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  description?: string;
  title?: string;
  isActive?: boolean;
  additionalInfo?: Record<string, any>;
}

/**
 * DTO for creating a standalone agent (not linked to Clerk)
 */
export interface CreateStandaloneAgentDto {
  firstName: string; // Required for standalone agents
  lastName?: string;
  displayEmail?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  description?: string;
  title?: string;
  isActive?: boolean;
  additionalInfo?: Record<string, any>;
}

/**
 * DTO for updating an agent
 */
export interface UpdateAgentDto {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  avatarThumbnailUrl?: string;
  displayEmail?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  description?: string;
  title?: string;
  isActive?: boolean;
  additionalInfo?: Record<string, any>;
}

/**
 * Response DTO for avatar upload
 */
export interface AvatarUploadResponse {
  avatarUrl: string;
  avatarThumbnailUrl: string;
}
