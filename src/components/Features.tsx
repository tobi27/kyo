import React from 'react';
import { AlertTriangle, TrendingUp, GitFork, Shield, Server, Zap, Receipt, DollarSign, Lock, CheckCircle } from 'lucide-react';

const PAIN_POINTS = [
  { icon: AlertTriangle, text: 'Unpredictable AI spend that blindsides finance every month' },
  { icon: TrendingUp, text: 'No cost attribution — impossible to bill customers or justify ROI' },
  { icon: GitFork, text: 'Recursive agent workflows break budgets before anyone notices' },
];

const SOLUTION_PILLARS = [
  { icon: Shield, title: 'Financial Control', sub: 'before execution', desc: 'Enforce budgets, caps, and policies at the gate — not after the invoice arrives.' },
  { icon: DollarSign, title: 'Task Economics', sub: 'cost, margin, attribution', desc: 'Every action maps to a customer, project, or workflow with exact margin calculation.' },
  { icon: Receipt, title: 'Settlement & Chargeback', sub: 'audit-grade finality', desc: 'Signed receipts and Merkle proofs for compliance, billing disputes, and audits.' },
];

const INTEGRATIONS = [
  { name: 'OpenAI SDK', sub: 'GPT-4o, o1' },
  { name: 'Anthropic', sub: 'Claude 3.5' },
  { name: 'LangChain', sub: 'Framework' },
  { name: 'CrewAI', sub: 'Multi-Agent' },
  { name: 'MCP', sub: 'Protocol' },
  { name: 'LangGraph', sub: 'Orchestration' },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="bg-slate-950 relative overflow-hidden">

      {/* Enterprise Pain Section */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-red-500/80 uppercase tracking-widest font-semibold mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-12">
            AI agents are powerful.<br />
            <span className="text-slate-500">Their costs are chaos.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((point, i) => (
              <div key={i} className="p-6 rounded-xl border border-red-500/10 bg-red-500/[0.02]">
                <point.icon className="w-8 h-8 text-red-500/60 mb-4 mx-auto" />
                <p className="text-slate-400 text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-4">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              XiGate turns agent execution into<br />
              <span className="gradient-text">predictable cost, billable economics, and auditable evidence.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTION_PILLARS.map((pillar, i) => (
              <div key={i} className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <pillar.icon className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-white font-semibold text-lg mb-1">{pillar.title}</h3>
                <p className="text-blue-400 text-xs uppercase tracking-wider mb-4">{pillar.sub}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swarm & Lineage */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-orange-500 mb-4">
                <GitFork className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Swarm Economics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Safe scaling for autonomous swarms<br />
                <span className="text-slate-500">— with full economic lineage.</span>
              </h2>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                When agents spawn agents, costs explode. XiGate makes recursion profitable with built-in economic controls at every generation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Agents spawn agents — budgets follow automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Lineage ensures costs are bounded and attributable</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Safe scaling without runaway costs</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#05080f] rounded-xl border border-white/5 p-8 font-mono text-xs">
              <div className="text-slate-500 mb-4">// ForkLicense Contract</div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-blue-400">parent_task</span>: TSK-3039</div>
                <div><span className="text-emerald-400">child_task</span>: TSK-3040</div>
                <div><span className="text-purple-400">budget_share</span>: 0.15 ($12.75)</div>
                <div><span className="text-orange-400">max_depth</span>: 3</div>
                <div><span className="text-cyan-400">customer</span>: Acme Corp</div>
                <div><span className="text-pink-400">workflow</span>: Lead Enrichment</div>
                <div className="pt-4 border-t border-white/5 mt-4"><span className="text-yellow-400">signature</span>: 0x8f2a...c4e1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Summary */}
      <section id="security" className="py-32 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-emerald-500 mb-4">
              <Lock className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Enterprise Architecture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Your data stays yours.<br />
              <span className="text-slate-500">We only see the economics.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Server, title: 'Runs in your VPC or on-prem', desc: 'Full control plane deploys inside your infrastructure boundary.' },
              { icon: Shield, title: 'Prompts never leave your environment', desc: 'Only usage metadata (token counts, costs, task IDs) is processed.' },
              { icon: Zap, title: 'Settlement uses metadata only', desc: 'Billing and audit happen without accessing sensitive payload data.' },
              { icon: Lock, title: 'Designed for regulated workflows', desc: 'SOC2, HIPAA, and financial services compliance-ready architecture.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                <item.icon className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-4">Drop-in Compatibility</h3>
            <p className="text-slate-400">Works with your existing AI stack. No rewrites required.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INTEGRATIONS.map((integ, i) => (
              <div key={i} className="p-4 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors text-center">
                <p className="text-white font-semibold text-sm">{integ.name}</p>
                <p className="text-slate-600 text-xs mt-1">{integ.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
