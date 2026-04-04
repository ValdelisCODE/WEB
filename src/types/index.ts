/** Generic API response wrapper */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Lead form data */
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
}

/** Service card data */
export interface Service {
  icon: string;
  title: string;
  description: string;
}

/** Testimonial */
export interface Testimonial {
  name: string;
  business: string;
  quote: string;
  rating: number;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
}
