// Enum types
export enum ListingStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  SOLD = 'sold',
  RENTED = 'rented',
  DELETED = 'deleted'
}

export enum ListingType {
  SALE = 'sale',
  RENT = 'rent',
  SALE_OR_RENT = 'sale_or_rent'
}

export enum PropertyCategory {
  RESIDENTIAL = 'residential',
  COMMERCIAL = 'commercial',
  INDUSTRIAL = 'industrial',
  LAND = 'land'
}

export enum PropertyType {
  // Residential
  APARTMENT = 'apartment',
  CONDOMINIUM = 'condominium',
  HOUSE_DETACHED = 'house_detached',
  HOUSE_SEMI_DETACHED = 'house_semi_detached',
  HOUSE_TERRACED = 'house_terraced',
  TOWNHOUSE = 'townhouse',
  MULTI_FAMILY_HOME = 'multi_family_home',
  PENTHOUSE = 'penthouse',
  STUDIO = 'studio',
  // Land
  LAND_RESIDENTIAL = 'land_residential',
  LAND_COMMERCIAL = 'land_commercial',
  LAND_AGRICULTURAL = 'land_agricultural',
  LAND_OTHER = 'land_other',
  // Commercial
  OFFICE = 'office',
  RETAIL = 'retail',
  COMMERCIAL_OTHER = 'commercial_other',
  // Industrial
  INDUSTRIAL_WAREHOUSE = 'industrial_warehouse',
  INDUSTRIAL_OTHER = 'industrial_other',
  // Hospitality
  HOSPITALITY = 'hospitality',
  // Other
  OTHER = 'other'
}

export interface PropertyListing {
  id: string;
  referenceNumber: string;
  organizationId: string;
  agentId?: string;
  status: ListingStatus;
  listingType: ListingType;
  propertyCategory: PropertyCategory;
  propertyType: PropertyType;
  description?: string;
  translatedDescriptions?: Record<string, string>;
  addressLine1?: string;
  addressLine2?: string;
  postalCode?: string;
  city: string;
  provinceState?: string;
  region?: string;
  countryCode: string;
  community?: string;
  latitude?: number;
  longitude?: number;
  price?: number;
  currency: string;
  bedrooms?: number;
  bathrooms?: number;
  livingArea?: number;
  plotArea?: number;
  areaUnit?: string;
  yearBuilt?: number;
  isNewConstruction: boolean;
  energyRatingDetails?: string;
  hasPool: boolean;
  hasSeaView: boolean;
  hasGarage: boolean;
  hasTerrace: boolean;
  hasGarden: boolean;
  isFurnished: boolean;
  hasAirConditioning: boolean;
  hasLift: boolean;
  additionalFeatures?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}
