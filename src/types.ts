export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  priceId?: string; // Stripe price ID
  mode: 'subscription' | 'payment' | 'contact';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TaskRow {
  id: string;
  timestamp: string;
  project: string;
  workflow: string;
  cost: number;
  billed: number;
  margin: string;
  status: 'Complete' | 'Cap Hit' | 'Processing';
}

export interface UserSubscription {
  id: string;
  plan: string;
  status: string;
  currentPeriodEnd: string | null;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string | null;
  subscriptions: UserSubscription[];
}
