import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Achievement {
  icon: LucideIcon;
  title: string;
  metric: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
