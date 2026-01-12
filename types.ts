export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  duration?: string;
}

export interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  location: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}