import { PricingTier, FaqItem } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "standard",
    name: "Standard",
    price: "$500",
    period: "/mo",
    description: "Predictable unit economics for growing agent fleets.",
    features: [
      "10,000 billable tasks included",
      "$0.0001 per additional task",
      "Standard Settlement Windows",
      "Recursive Spend Caps",
      "Email Support"
    ],
    cta: "Start 10-min deploy",
    mode: "subscription",
    priceId: import.meta.env.VITE_STRIPE_PRICE_STANDARD || "price_standard",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-scale platforms requiring SLA & VPC isolation.",
    features: [
      "Volume discounts",
      "Private Control Plane (BYOC)",
      "Signed Receipt Finality",
      "Merkle Audit Windows",
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
    description: "White-glove implementation for disruptive agent builders.",
    features: [
      "7-day deployment guarantee",
      "Custom ForkLicense Logic",
      "Integration Engineering",
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
    question: "What is a ForkLicense?",
    answer: "A ForkLicense is a signed contract for agent reproduction. When a parent agent spawns a sub-agent, the ForkLicense enforces budget inheritance, recursion depth, and spawn taxes to prevent runaway scaling costs."
  },
  {
    question: "How does 'Receipt Finality' work?",
    answer: "Every completed task generates a cryptographically signed receipt. These receipts are batched into Merkle trees and rolled up at configurable windows, providing tamper-proof audit trails for compliance and chargebacks."
  },
  {
    question: "Is my prompt data safe?",
    answer: "Yes. XiGate operates on a zero-trust model. We only ingest usage metadata (token counts, model IDs, task duration) for accounting. Prompt payloads never leave your VPC."
  },
  {
    question: "What are 'Lanes & Pricing'?",
    answer: "Lanes are priority tiers for agent execution. Priority Lane offers faster settlement and higher rate limits for time-sensitive tasks. Economy Lane provides cost-optimized execution for batch workloads."
  },
  {
    question: "Can we bill our customers per workflow?",
    answer: "Yes. XiGate generates a unique transaction ID for every agent execution. You can map these 1:1 to your customer invoices with exact margin calculation."
  },
  {
    question: "What integrations do you support?",
    answer: "We offer drop-in SDKs for OpenAI, Anthropic, LangChain, LangGraph, CrewAI, and MCP. We also act as a proxy for standard HTTP requests if you're using custom orchestrators."
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
