import React from 'react';
import { AlertTriangle, TrendingUp, GitFork, Shield, Server, Zap, Receipt, DollarSign, Lock, CheckCircle, Activity, Users, Layers, ArrowRight } from 'lucide-react';

const PAIN_POINTS = [
  { icon: AlertTriangle, text: 'Unpredictable AI spend that blindsides finance every month' },
  { icon: TrendingUp, text: 'No cost attribution — impossible to bill customers or justify ROI' },
  { icon: GitFork, text: 'Recursive agent workflows break budgets before anyone notices' },
];

const CORE_PRIMITIVES = [
  { icon: DollarSign, title: 'Task Economics', sub: 'cost + billing + margin', desc: 'Every agent action is a Task with known cost, billable price, and measurable margin. The atomic unit of AI economics.', color: 'text-blue-500' },
  { icon: GitFork, title: 'Swarm Lineage', sub: 'recursion + delegation', desc: 'When agents spawn agents, ForkLicense enforces budget inheritance and depth limits. Recursion-safe scaling.', color: 'text-orange-500' },
  { icon: Receipt, title: 'Auditable Receipts', sub: 'signed proofs + Merkle windows', desc: 'Every execution generates a cryptographic receipt. Batch into Merkle trees for tamper-proof audit trails.', color: 'text-emerald-500' },
  { icon: Zap, title: 'Settlement', sub: 'extraction to billing', desc: 'Roll up Tasks to invoices. Export to Stripe, NetSuite, or your ledger. Turn execution into revenue.', color: 'text-purple-500' },
];

const INTEGRATIONS = [
  { name: 'OpenAI SDK', sub: 'GPT-4o, o1' },
  { name: 'Anthropic', sub: 'Claude 3.5' },
  { name: 'LangChain', sub: 'Framework' },
  { name: 'CrewAI', sub: 'Multi-Agent' },
  { name: 'MCP', sub: 'Protocol' },
  { name: 'LangGraph', sub: 'Orchestration' },
];

const SWARM_CAPABILITIES = [
  { title: 'Research Swarms', desc: 'Spawn 50+ parallel researchers to analyze markets, competitors, or patents in minutes instead of weeks.' },
  { title: 'Code Generation', desc: 'Orchestrate agents that write, review, test, and deploy code autonomously across your entire codebase.' },
  { title: 'Data Pipelines', desc: 'ETL workflows where agents extract, transform, validate, and load data with self-healing error recovery.' },
  { title: 'Customer Support', desc: 'Triage, classify, research, and resolve tickets with escalation agents that know when to involve humans.' },
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

      {/* Exponential Problem Visualization */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <Activity className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">The Exponential Trap</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                One agent spawns ten.<br />
                Ten spawn a hundred.<br />
                <span className="text-red-500">Your budget is gone.</span>
              </h2>
              <p className="text-slate-400 mb-6 font-light leading-relaxed">
                Modern AI workflows aren't linear. An orchestrator spawns researchers. Researchers spawn validators. Validators spawn fixers. Each generation multiplies costs exponentially.
              </p>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                Without economic controls, a simple "analyze this document" request can cascade into thousands of LLM calls — each one billable, none of them tracked.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                  <p className="text-2xl font-bold text-red-500">2^n</p>
                  <p className="text-xs text-slate-500 mt-1">Cost growth per depth</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                  <p className="text-2xl font-bold text-red-500">0%</p>
                  <p className="text-xs text-slate-500 mt-1">Visibility without control</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                  <p className="text-2xl font-bold text-red-500">???</p>
                  <p className="text-xs text-slate-500 mt-1">Monthly bill surprise</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Visual: Exponential tree */}
              <div className="bg-[#05080f] rounded-xl border border-white/5 p-8">
                <div className="text-xs text-slate-500 mb-6 uppercase tracking-wider">Uncontrolled Swarm Growth</div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="w-px h-4 bg-slate-700"></div>
                  <div className="flex gap-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                        <span className="text-[10px] text-orange-400">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {[1,2,3,4,5,6,7,8,9].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                        <span className="text-[8px] text-red-400">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1 flex-wrap justify-center max-w-[280px]">
                    {Array.from({length: 27}).map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-red-600/30 border border-red-600/50"></div>
                    ))}
                  </div>
                  <div className="text-red-500 text-xs font-mono mt-4">
                    depth=4 → 81+ agents → $$$$ unknown
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Primitives - The Xi Kernel */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-4">The Xi Kernel</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              The point where agentic execution<br />
              <span className="gradient-text">becomes a financial transaction.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              XiGate intercepts every agent call. Drop-in compatible with OpenAI, Anthropic, LangChain, CrewAI, and MCP endpoints.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRIMITIVES.map((prim, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <prim.icon className={'w-8 h-8 mb-4 ' + prim.color} />
                <h3 className="text-white font-semibold mb-1">{prim.title}</h3>
                <p className={'text-xs uppercase tracking-wider mb-3 ' + prim.color}>{prim.sub}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{prim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Swarms Can Do */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-purple-500 mb-4">
              <Layers className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Swarm Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Autonomous agents are transforming enterprise.<br />
              <span className="text-slate-500">But only if you can afford them.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The most valuable AI workflows are recursive. They spawn sub-agents, parallelize work, and self-correct. XiGate makes these workflows economically viable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SWARM_CAPABILITIES.map((cap, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <ArrowRight className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] text-center">
            <p className="text-emerald-400 font-medium">
              With XiGate: Every agent, every spawn, every token — tracked, attributed, and billable.
            </p>
          </div>
        </div>
      </section>

      {/* Swarm & Lineage - How XiGate Controls It */}
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
                XiGate's ForkLicense system enforces economic rules at spawn time. Every child agent inherits budget constraints, depth limits, and attribution from its parent. No rogue children. No surprise bills.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">Budget Inheritance</span>
                    <p className="text-slate-500 text-sm">Children receive a fraction of parent budget. Total spend is bounded.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">Depth Limits</span>
                    <p className="text-slate-500 text-sm">Configure max recursion depth. Block spawns that exceed limits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">Spawn Tax</span>
                    <p className="text-slate-500 text-sm">Optional tax on each spawn. Discourages unnecessary recursion.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">Full Lineage</span>
                    <p className="text-slate-500 text-sm">Every agent knows its parent chain. Attribution flows to root task.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[#05080f] rounded-xl border border-white/5 p-8 font-mono text-xs">
              <div className="text-slate-500 mb-4">// ForkLicense Contract</div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-blue-400">parent_task</span>: TSK-3039</div>
                <div><span className="text-emerald-400">child_task</span>: TSK-3040</div>
                <div><span className="text-purple-400">budget_share</span>: 0.15 ($12.75 of $85.00)</div>
                <div><span className="text-orange-400">max_depth</span>: 3 (current: 2)</div>
                <div><span className="text-cyan-400">spawn_tax</span>: $0.05</div>
                <div><span className="text-pink-400">customer</span>: Acme Corp</div>
                <div><span className="text-slate-300">workflow</span>: Lead Enrichment</div>
                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-yellow-400">lineage</span>: root → orchestrator → researcher
                </div>
                <div><span className="text-emerald-400">status</span>: APPROVED</div>
                <div><span className="text-slate-600">signature</span>: 0x8f2a...c4e1</div>
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
