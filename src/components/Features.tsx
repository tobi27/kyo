import React from 'react';
import { Shield, GitBranch, Terminal, Globe, Cpu, Lock } from 'lucide-react';
import { INTEGRATIONS } from '../constants';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Governance for the <br/><span className="text-slate-500">Machine Economy</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg font-light leading-relaxed">
            A unified control plane to manage the financial lifecycle of autonomous agents, from deployment to settlement.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-40">
          {[
            { icon: Shield, title: 'Runtime Spend Caps', desc: 'Enforce hard budget limits at the request level. Prevent recursive agent loops from draining accounts.' },
            { icon: Terminal, title: 'Verifiable Logs', desc: 'Every tool use, token generation, and API call is cryptographically signed and stored for audit.' },
            { icon: Globe, title: 'Multi-Tenant Auth', desc: 'Issue sub-keys to your customers. Track margin and usage per-tenant out of the box.' },
          ].map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <f.icon className="w-6 h-6 text-slate-400 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-medium text-white mb-3">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Swarm Visualisation Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center border-t border-white/5 pt-32">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <GitBranch className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Swarm Isolation</span>
            </div>
            <h3 className="text-3xl font-medium text-white">Prevent Cascade Failure</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Parent agents allocate virtual budgets to child workers. If a worker goes rogue, the budget cap acts as a circuit breaker, halting only that branch.
            </p>
            <ul className="space-y-4 pt-4">
              {['Recursive budget propagation', 'Lineage cost tracking', 'Instant kill-switch'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-[#05080f] rounded-xl border border-white/5 p-12 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg-premium opacity-20"></div>

              <div className="relative z-10 flex flex-col items-center gap-12">
                {/* Parent Node */}
                <div className="flex flex-col items-center gap-4">
                  <div className="px-6 py-3 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] flex items-center gap-3">
                    <Cpu className="w-4 h-4" />
                    <span>ORCHESTRATOR</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-white">BUDGET: ∞</span>
                  </div>
                  <div className="h-8 w-px bg-gradient-to-b from-emerald-500/30 to-slate-700"></div>
                </div>

                {/* Branches */}
                <div className="flex justify-center gap-8 md:gap-16 relative">
                  <div className="absolute -top-4 left-[25%] right-[25%] h-px bg-slate-700"></div>
                  <div className="absolute -top-4 left-[25%] h-4 w-px bg-slate-700"></div>
                  <div className="absolute -top-4 right-[25%] h-4 w-px bg-slate-700"></div>

                  {/* Child 1 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="px-5 py-3 rounded bg-slate-900 border border-white/10 text-slate-400 text-[10px] font-mono flex flex-col items-center gap-1 min-w-[120px]">
                      <span className="font-bold text-slate-200">RESEARCHER</span>
                      <span className="text-emerald-500">$2.40 / $10.00</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  </div>

                  {/* Child 2 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="px-5 py-3 rounded bg-slate-900 border border-red-500/30 text-slate-400 text-[10px] font-mono flex flex-col items-center gap-1 min-w-[120px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                      <span className="font-bold text-white relative z-10">CODER_V1</span>
                      <span className="text-red-400 relative z-10">CAP HIT ($15.00)</span>
                    </div>
                    <Lock className="w-3 h-3 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-32 pt-16 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {INTEGRATIONS.map((integ, i) => (
              <span key={i} className="text-sm font-semibold tracking-wider text-white uppercase">{integ.name}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
