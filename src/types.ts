export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'brain' | 'user' | 'heart' | 'shield';
  fullDescription?: string;
  duration?: string;
  suitableFor?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  date: string;
  avatarLetter: string;
  rating: number;
  review: string;
  source: 'google';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  mode: 'in-person' | 'online';
  date: string;
  timeSlot: string;
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
