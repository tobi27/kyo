import React from 'react';
import { AlertTriangle, Eye, FileX, Fingerprint, GitBranch, DollarSign, Shield, BarChart3, FileCheck } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'OpenAI', sub: 'o1 / GPT-4o' },
  { name: 'Anthropic', sub: 'Claude 3.5' },
  { name: 'LangChain', sub: 'Framework' },
  { name: 'MCP', sub: 'Protocol' },
  { name: 'XiGate SDK', sub: 'Node/Python' },
  { name: 'LlamaIndex', sub: 'Data RAG' },
  { name: 'CrewAI', sub: 'Multi-Agent' },
  { name: 'Pinecone', sub: 'Vector Store' },
];

const PROTOCOL_STEPS = [
  { num: '1', title: 'Identity & Permissions', desc: 'Every agent is assigned a durable AgentID (aid:) and CapTokens defining precise execution boundaries.', icon: Fingerprint },
  { num: '2', title: 'Lineage & Genealogy', desc: 'Recursive spawns inherit budget constraints through ForkLicenses, creating an immutable family tree of cost.', icon: GitBranch },
  { num: '3', title: 'Pricing & Optimization', desc: 'Dynamic Lanes (Priority/Economy) ensure the right price for the right task urgency at any scale.', icon: DollarSign },
  { num: '4', title: 'Cryptographic Proofs', desc: 'Execution results generate signed receipts. Proof of completion is verified via Merkle window rollups.', icon: Shield },
  { num: '5', title: 'Real-time P&L', desc: 'Live dashboards show customer-level unit economics and margin protection for every single task.', icon: BarChart3 },
  { num: '6', title: 'Settlement Ready', desc: 'Automatic exports to Stripe, NetSuite, or internal ledgers. 100% audit-ready financial data.', icon: FileCheck },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="bg-slate-950 relative overflow-hidden">
      {/* The Burning Reality */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">The Burning Reality</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              AI agents are a "Black Box" of unmanaged expenses. In the machine economy, undefined burn rates are the primary blocker to enterprise-grade AI adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: AlertTriangle, title: 'Uncontrollable Loops', desc: 'Recursive agents can drain months of budget in minutes without protocol-level circuit breakers.', color: 'text-red-500' },
              { icon: Eye, title: 'Attribution Void', desc: 'Generic bills provide zero visibility into which customer, team, or task actually incurred the cost.', color: 'text-yellow-500' },
              { icon: FileX, title: 'No Financial Trace', desc: 'Traditional logs lack cryptographic finality, making chargebacks and audits legally difficult.', color: 'text-orange-500' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-red-500/10 bg-red-500/[0.02] hover:bg-red-500/[0.05] transition-colors">
                <item.icon className={'w-8 h-8 mb-6 ' + item.color} />
                <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Financial Protocol */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">The Financial Protocol</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              The complete lifecycle of a billable agent action.<br />
              <span className="text-slate-500">Identity → Lineage → Pricing → Receipts → Settlement.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROTOCOL_STEPS.map((step, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                    {step.num}
                  </div>
                  <step.icon className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ecosystem Core */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-xs text-slate-600 uppercase tracking-widest font-semibold mb-12">The Ecosystem Core</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
