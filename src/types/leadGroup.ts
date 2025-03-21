import { BaseEntity } from './common';
import { BrandingSettings } from './organization';

export interface LeadGroup extends BaseEntity {
  name: string;
  description?: string;
  locationCountry: string;
  tags?: string[];
  pricingPricePerLead: number;
  pricingCurrency: string;
  pricingMinimumBudget: number;
  distributionMaxAgents?: number;
  distributionEstimatedLeadsPerMonth?: number;
  distributionExclusivityPeriod?: number;
  distributionSubscriptionLimitsMinSubscriptionPeriod?: number;
  distributionSubscriptionLimitsMaxConcurrentSubscriptions?: number;
  leadFiltersSourceMetadataRequirements?: any;
  leadFiltersPropertyPrefsPriceRangeMin?: number;
  leadFiltersPropertyPrefsPriceRangeMax?: number;
  metaAdSetId?: string[];
  metaFormId?: string[];
  metaCampaignId?: string[];
  imageUrl?: string;
  isActive?: boolean;
  brandingSettings?: BrandingSettings;
  brandingOrganizationId?: string;
} 