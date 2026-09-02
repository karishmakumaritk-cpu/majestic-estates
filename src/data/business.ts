// Central Business Configuration for Majestic Estates
// Sourced strictly from verified credentials & local office profile

export const BUSINESS_INFO = {
  name: "Majestic Estates",
  businessType: "Real Estate Consultant",
  rating: 4.8,
  reviewCount: 729,
  primaryLocation: "Mayur Vihar Phase I, New Delhi",
  primaryPhone: "+91 98115 27266",
  phone: "+91 98115 27266",
  phoneRaw: "+919811527266",
  whatsAppNumber: "919811527266",
  email: "contact@majesticestates.in",
  hours: "Monday – Sunday: 9:30 AM – 8:00 PM",
  timings: "Monday – Sunday: 9:30 AM – 8:00 PM",
  fullAddress: "Ground Floor, Shop No. P-19, Below Sagar Ratna Restaurant, Opposite Fine Home Apartments, Mayur Vihar Phase I, Block P, Pandav Nagar, New Delhi, Delhi – 110091",
  landmark: "Below Sagar Ratna Restaurant, Opposite Fine Home Apartments",
  address: {
    line1: "Ground Floor, Shop No. P-19",
    line2: "Below Sagar Ratna Restaurant",
    line3: "Opposite Fine Home Apartments",
    line4: "Mayur Vihar Phase I, Block P, Pandav Nagar",
    cityStateZip: "New Delhi, Delhi – 110091",
    full: "Ground Floor, Shop No. P-19, Below Sagar Ratna Restaurant, Opposite Fine Home Apartments, Mayur Vihar Phase I, Block P, Pandav Nagar, New Delhi, Delhi – 110091"
  },
  services: [
    "Property Buying",
    "Property Selling",
    "Property Renting"
  ],
  propertyTypes: [
    "Flats",
    "Apartments",
    "Offices",
    "Shops",
    "Residential properties",
    "Commercial properties"
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Majestic+Estates+Shop+P-19+Mayur+Vihar+Phase+1+Pandav+Nagar+New+Delhi+110091",
  mapEmbedUrl: "https://maps.google.com/maps?q=Mayur+Vihar+Phase+1+Pandav+Nagar+Delhi+110091&t=&z=15&ie=UTF8&iwloc=&output=embed"
} as const;

export function getCallNumber(): string {
  return BUSINESS_INFO.phoneRaw;
}

export function getDirectionsUrl(): string {
  return BUSINESS_INFO.googleMapsUrl;
}

/**
 * Generates an official WhatsApp URL with an encoded prefilled message
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = "Hello Majestic Estates, I am interested in a property in Mayur Vihar / Delhi NCR. Please share available options.";
  const encodedText = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${BUSINESS_INFO.whatsAppNumber}?text=${encodedText}`;
}

export function getPropertyWhatsAppUrl(propertyTitle: string, propertyPrice?: string): string {
  const priceInfo = propertyPrice ? ` (${propertyPrice})` : "";
  const msg = `Hello Majestic Estates, I am interested in ${propertyTitle}${priceInfo}. Please share more details.`;
  return getWhatsAppUrl(msg);
}

export function getSellWhatsAppUrl(propertyDetails?: string): string {
  const details = propertyDetails ? ` - Details: ${propertyDetails}` : "";
  const msg = `Hello Majestic Estates, I would like to discuss selling my property in Delhi NCR${details}. Please connect with me.`;
  return getWhatsAppUrl(msg);
}

export function getRentWhatsAppUrl(propertyType?: string, location?: string): string {
  const type = propertyType ? ` for a ${propertyType}` : "";
  const loc = location ? ` in ${location}` : "";
  const msg = `Hello Majestic Estates, I am looking to rent a property${type}${loc}. Please share available rental listings.`;
  return getWhatsAppUrl(msg);
}
