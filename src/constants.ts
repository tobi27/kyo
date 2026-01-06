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
    question: "How do you enforce budgets before execution?",
    answer: "Every agent request passes through XiGate's control plane before reaching your LLM. We validate the request against your configured caps (per-task, per-customer, per-workflow) and reject executions that would exceed limits. This happens in milliseconds with no noticeable latency."
  },
  {
    question: "How can I use this for chargeback?",
    answer: "Every task generates a unique ID mapped to a customer, project, or workflow. At settlement, you get itemized records showing exact costs, margins, and attribution. Export directly to Stripe, NetSuite, or your billing system via API or CSV."
  },
  {
    question: "Does my data stay in my environment?",
    answer: "Yes. XiGate runs in your VPC or on-prem. Prompts, responses, and sensitive payloads never leave your infrastructure. We only process usage metadata (token counts, model IDs, durations) for accounting and settlement."
  },
  {
    question: "How does swarm scaling remain bounded?",
    answer: "When agents spawn sub-agents, our ForkLicense system enforces budget inheritance. Each child agent receives a fraction of the parent's budget with configurable depth limits. If a swarm tries to exceed its allocated budget, execution is blocked before costs spiral."
  },
  {
    question: "What compliance certifications do you support?",
    answer: "XiGate is designed for regulated environments. Our architecture supports SOC2, HIPAA, and financial services compliance requirements. Enterprise customers receive dedicated compliance documentation and audit support."
  },
  {
    question: "How fast is the integration?",
    answer: "Standard deployments take 10 minutes using our CLI. We offer drop-in SDKs for OpenAI, Anthropic, LangChain, CrewAI, and MCP. Design Partners get white-glove integration with a 7-day deployment guarantee."
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
