export type Language = 'en' | 'si';

export type ServiceCategory = 
  | 'haircuts'
  | 'colouring'
  | 'treatments'
  | 'grooming'
  | 'skincare'
  | 'bridal'
  | 'nails'
  | 'spa';

export interface Service {
  id: string;
  name: { en: string; si: string };
  category: ServiceCategory;
  categoryName: { en: string; si: string };
  priceLKR: number;
  durationMinutes: number;
  shortDesc: { en: string; si: string };
  longDesc: { en: string; si: string };
  image: string;
  benefits: { en: string[]; si: string[] };
  included: { en: string[]; si: string[] };
  prepTips: { en: string[]; si: string[] };
  recommendedStylistIds: string[];
  popular?: boolean;
  gender: 'unisex' | 'women' | 'men';
}

export interface Stylist {
  id: string;
  name: string;
  title: { en: string; si: string };
  experienceYears: number;
  bio: { en: string; si: string };
  specialties: { en: string[]; si: string[] };
  image: string;
  rating: number;
  reviewsCount: number;
  portfolioImages?: string[];
  availabilityNotes?: { en: string; si: string };
}

export interface PackageOffer {
  id: string;
  name: { en: string; si: string };
  tagline: { en: string; si: string };
  regularPriceLKR: number;
  promoPriceLKR: number;
  durationMinutes: number;
  includedServices: { en: string[]; si: string[] };
  terms: { en: string[]; si: string[] };
  badge?: { en: string; si: string };
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: { en: string; si: string };
  category: 'haircuts' | 'colour' | 'styling' | 'bridal' | 'grooming' | 'interior';
  categoryLabel: { en: string; si: string };
  image: string;
  description: { en: string; si: string };
  stylistName?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: { en: string; si: string };
  review: { en: string; si: string };
  serviceName: { en: string; si: string };
  rating: number;
  date: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  category: 'booking' | 'services' | 'etiquette' | 'payment';
  question: { en: string; si: string };
  answer: { en: string; si: string };
}

export interface BookingFormData {
  serviceId: string;
  stylistId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}
