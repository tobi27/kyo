import React from 'react';
import { Fingerprint, Target, FileCode, GitFork, Shield, Wallet, Gauge, Lock } from 'lucide-react';

const PRIMITIVES = [
  { icon: Fingerprint, title: 'AgentID (durable)', desc: 'Persistent machine identity with rotation and lineage tracking (parent/child relationships).', color: 'text-blue-400' },
  { icon: Target, title: 'TaskID (economic unit)', desc: 'Every action is attributed to a Task (customer/project/workflow) enabling precise chargeback and margin calculation.', color: 'text-emerald-400' },
  { icon: FileCode, title: 'Execution Envelope', desc: 'Each action = (agent_id, task_id, policy_hash, lane, cost_vector, trace_id). Full context, always.', color: 'text-purple-400' },
  { icon: GitFork, title: 'ForkLicense (swarm recursion)', desc: 'Spawn = signed contract: budget_share + depth + inheritance rules. No rogue children.', color: 'text-orange-400' },
  { icon: Shield, title: 'Receipt Finality', desc: 'Signed receipts + Merkle windows = tamper-proof audit trail for compliance and chargebacks.', color: 'text-cyan-400' },
  { icon: Wallet, title: 'Settlement / Clearing', desc: 'Rollup Task to invoice to settlement events. Export to Stripe, NetSuite, or your ledger via API.', color: 'text-pink-400' },
  { icon: Gauge, title: 'Lanes and Pricing', desc: 'best_effort / realtime / priority markets with dynamic pricing based on urgency and capacity.', color: 'text-yellow-400' },
  { icon: Lock, title: 'StateVault / Escrow', desc: 'State + access + escrow enables non-output economy: payment on state/commit, not just text.', color: 'text-red-400' },
];

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

const Features: React.FC = () => {
  return (
    <div id="features" className="bg-slate-950 relative overflow-hidden">
      
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Every agent action becomes a billable transaction', sub: 'customer / project / task attribution' },
              { title: 'Swarm-native economics', sub: 'lineage + fork contracts + recursion-safe budgets' },
              { title: 'Audit-grade proofs', sub: 'signed receipts + Merkle finality' },
              { title: 'BYOC deployment', sub: 'execution stays in your VPC; settlement uses metadata only' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                <p className="text-white font-medium mb-2">{item.title}</p>
                <p className="text-slate-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">The Primitives</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              The building blocks that turn chaotic agent execution into auditable financial transactions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIMITIVES.map((prim, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <prim.icon className={'w-8 h-8 mb-4 ' + prim.color} />
                <h3 className="text-white font-medium mb-2">{prim.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{prim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-orange-500 mb-4">
                <GitFork className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Swarm Economics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Recursive delegation<br />you can bill.</h2>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                When agents spawn agents, costs explode. XiGate makes recursion profitable with built-in economic controls at every generation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div><span className="text-slate-300">ForkLicense enforces budget inheritance per generation</span></li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div><span className="text-slate-300">Lineage is mandatory in every receipt</span></li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div><span className="text-slate-300">Spawn tax + lane premium scales revenue with recursion</span></li>
              </ul>
            </div>
            <div className="bg-[#05080f] rounded-xl border border-white/5 p-8 font-mono text-xs">
              <div className="text-slate-500 mb-4">// ForkLicense Contract</div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-blue-400">parent_agent_id</span>: aid:orchestrator_01</div>
                <div><span className="text-emerald-400">child_agent_id</span>: aid:researcher_47</div>
                <div><span className="text-purple-400">budget_share</span>: 0.15</div>
                <div><span className="text-orange-400">max_depth</span>: 3</div>
                <div><span className="text-cyan-400">spawn_tax</span>: 0.02</div>
                <div><span className="text-pink-400">lane</span>: priority</div>
                <div className="pt-4 border-t border-white/5 mt-4"><span className="text-yellow-400">signature</span>: 0x8f2a...c4e1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
