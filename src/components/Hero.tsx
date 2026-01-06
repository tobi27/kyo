import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Ledger from './Ledger';

const Hero: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleStart = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      loginWithRedirect();
    }
  };

  const logos = ['GOLDMAN SACHS', 'stripe', 'Uber', 'salesforce', 'NETFLIX'];

  return (
    <section className="relative pt-40 md:pt-48 pb-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#020305]">
        <div className="absolute inset-0 grid-bg-premium opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start gap-8">
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.05]">
              <span className="block">Where agents</span>
              <span className="block">become</span>
              <span className="block gradient-text">transactions.</span>
            </h1>
          </div>

          <p className="text-lg text-slate-400 max-w-lg font-light leading-relaxed">
            XiGate is the kernel where agentic execution becomes billable economics. <span className="text-white font-medium">Task → Swarm → Receipt → Settlement.</span>
          </p>

          {/* Core primitives */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs text-blue-400 font-semibold">Task</p>
              <p className="text-[10px] text-slate-500">Economic unit</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs text-orange-400 font-semibold">Swarm</p>
              <p className="text-[10px] text-slate-500">Recursion + lineage</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs text-emerald-400 font-semibold">Receipt</p>
              <p className="text-[10px] text-slate-500">Computable truth</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs text-purple-400 font-semibold">Settlement</p>
              <p className="text-[10px] text-slate-500">Value extraction</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button onClick={handleStart} className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Deploy in your VPC <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact?source=talk_to_sales" className="h-12 px-8 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800/50 transition-colors flex items-center justify-center">
              Talk to Sales
            </Link>
          </div>

          <div className="pt-8 border-t border-white/5 w-full">
            <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-6">Trusted by platforms deploying Agentic AI</p>
            <div className="flex flex-wrap gap-8 items-center">
              {logos.map((logo, i) => (
                <span key={i} className="text-sm font-semibold text-slate-500 tracking-wider opacity-60 hover:opacity-100 transition-opacity">{logo}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <Ledger />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
