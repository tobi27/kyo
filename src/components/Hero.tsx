import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
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

  return (
    <section className="relative pt-40 md:pt-48 pb-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#020305]">
        <div className="absolute inset-0 grid-bg-premium opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/5 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8">
          {/* Pill Label */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-full p-1 pl-1 pr-4 flex items-center gap-3 transition-all hover:border-white/20 cursor-default">
              <div className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                Stable v2.1
              </div>
              <span className="text-xs text-slate-400 font-medium">Enterprise Control Plane</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.05]">
              <span className="block text-slate-500 font-light">Total Control over</span>
              <span className="gradient-text font-semibold">Agent Economics</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg font-light leading-relaxed">
              The missing financial layer for autonomous systems. Enforce runtime budgets, trace lineage, and automate billing for every token.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={handleStart}
              className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Start Integration <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button className="h-12 px-8 rounded-full border border-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-800/50 hover:text-white transition-colors flex items-center justify-center gap-2 group">
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Play className="w-3 h-3 fill-current" />
              </div>
              See How It Works
            </button>
          </div>

          {/* Social Proof Text */}
          <div className="pt-8 border-t border-white/5 w-full">
            <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-4">Trusted by engineering teams at</p>
            <div className="flex gap-8 opacity-40 grayscale mix-blend-screen">
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* Visual Content: The Ledger */}
        <div className="relative perspective-1000">
          <Ledger />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
