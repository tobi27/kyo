import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
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
              <span className="block">Agent</span>
              <span className="block">execution.</span>
              <span className="block text-slate-500">Predictable</span>
              <span className="block text-slate-500">costs.</span>
              <span className="block gradient-text">Measured</span>
              <span className="block gradient-text">margin.</span>
            </h1>
          </div>

          <p className="text-lg text-slate-400 max-w-lg font-light leading-relaxed">
            XiGate turns agent execution into financial transactions: <span className="text-slate-300">identity → lineage → pricing → receipts → settlement.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button onClick={handleStart} className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Deploy in your VPC <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800/50 transition-colors">
              Talk to Sales
            </button>
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
