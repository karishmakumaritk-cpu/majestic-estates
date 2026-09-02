export interface Property {
  id: string;
  title: string;
  category: 'residential' | 'commercial';
  transactionType: 'buy' | 'rent' | 'both';
  propertyType: 'Flat' | 'Apartment' | 'Office' | 'Shop' | 'Builder Floor';
  location: string;
  subLocation?: string;
  price: string;
  priceNumeric: number; // in Lakhs for sorting/filtering
  isRent?: boolean;
  rentPrice?: string;
  area: string; // e.g. "1,450 sq.ft"
  bedrooms?: number;
  bathrooms?: number;
  floor?: string;
  furnishing?: 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished';
  facing?: string;
  image: string;
  gallery?: string[];
  description: string;
  keyFeatures: string[];
  badge?: string;
  isFeatured?: boolean;
}

export interface LocationArea {
  id: string;
  name: string;
  subTitle: string;
  description: string;
  propertyTypes: string[];
  metroConnectivity: string;
  image: string;
}

export interface FilterState {
  transaction: 'all' | 'buy' | 'rent' | 'sell';
  propertyType: string;
  category: 'all' | 'residential' | 'commercial';
  location: string;
  budgetRange: string;
  searchQuery: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  lookingFor: 'Buy' | 'Rent' | 'Sell';
  propertyType: 'Flat' | 'Apartment' | 'Office' | 'Shop' | 'Other';
  preferredLocation: string;
  budget: string;
  message: string;
}
