import { PricingTier, FaqItem } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "standard",
    name: "Standard",
    price: "$500",
    period: "/month",
    description: "For teams monetizing their first agent workflows.",
    features: [
      "10,000 billable tasks included",
      "$0.0001 per additional task",
      "Standard retention (30 days)",
      "Basic Runtime Spend Caps",
      "Email Support"
    ],
    cta: "Start Integration",
    mode: "subscription",
    priceId: import.meta.env.VITE_STRIPE_PRICE_STANDARD || "price_standard",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For platforms running mission-critical agent swarms.",
    features: [
      "Volume discounts",
      "Private Control Plane option",
      "Unlimited log retention",
      "Complex Swarm Budgeting",
      "Dedicated Solution Architect",
      "24/7 SLA"
    ],
    cta: "Contact Sales",
    highlight: true,
    mode: "contact",
  },
  {
    id: "design_partner",
    name: "Design Partner",
    price: "$25,000",
    period: "one-time",
    description: "White-glove implementation for high-scale builders.",
    features: [
      "7-day deployment guarantee",
      "White-glove BYOC setup",
      "Custom integration engineering",
      "Roadmap priority",
      "Direct channel to founders"
    ],
    cta: "Apply for Partner Program",
    mode: "payment",
    priceId: import.meta.env.VITE_STRIPE_PRICE_DESIGN_PARTNER || "price_design_partner",
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can we bill our customers per workflow?",
    answer: "Yes. XiGate generates a unique transaction ID for every agent execution. You can map these 1:1 to your customer invoices with exact margin calculation."
  },
  {
    question: "Does prompt data leave our VPC?",
    answer: "No. XiGate operates on a zero-trust model. We only ingress usage metadata (token counts, model IDs, task duration) for accounting. Payloads remain in your infrastructure."
  },
  {
    question: "How do you do chargeback?",
    answer: "We tag every execution with a Cost Center or Project ID at runtime. At the end of the cycle, we generate a consolidated ledger export compatible with ERPs (NetSuite, Oracle, Coupa)."
  },
  {
    question: "How do swarms stay safe?",
    answer: "XiGate implements lineage tracking with recursive sub-budgets. A parent agent delegates a 'max spend' to a child. If the child hits the cap, it is halted immediately, protecting the parent's total budget."
  },
  {
    question: "What specific stacks do you support?",
    answer: "We offer drop-in SDKs for OpenAI, Anthropic, LangChain, LangGraph, and CrewAI. We also act as a proxy for standard HTTP requests if you're using custom orchestrators."
  },
  {
    question: "Is this a proxy or an SDK?",
    answer: "Both deployment modes are available. The sidecar proxy offers the strongest guarantees for non-compliant traffic blocking, while the SDK provides deeper application-level context."
  },
  {
    question: "How is 'margin' calculated?",
    answer: "You define a rate card for your end-users (e.g., $0.10 per task). We track the underlying provider cost (e.g., $0.02). The ledger automatically calculates and records the $0.08 gross margin per task."
  },
  {
    question: "Can I deploy the control plane on-prem?",
    answer: "Yes. For Enterprise tier customers, the entire control plane (UI and database) can be deployed within your air-gapped environment."
  }
];

export const INTEGRATIONS = [
  { name: "OpenAI", type: "Model" },
  { name: "Anthropic", type: "Model" },
  { name: "LangChain", type: "Framework" },
  { name: "LangGraph", type: "Orchestration" },
  { name: "CrewAI", type: "Swarm" },
  { name: "MCP Server", type: "Protocol" },
];
