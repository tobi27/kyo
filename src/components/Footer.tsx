import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
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
    <>
      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-slate-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Scale your machine<br />economy with confidence.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join the fleet of high-margin AI platforms using XiGate to turn agent execution into auditable financial transactions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleStart} className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Deploy in your VPC <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800/50 transition-colors">
              Talk to Sales
            </button>
          </div>
          <button onClick={handleStart} className="mt-6 text-sm text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
            Start a 10-min deploy <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-slate-800 p-1.5 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">XiGate</span>
            </Link>
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">API Reference</a>
              <a href="#" className="hover:text-white transition-colors">Status</a>
              <a href="mailto:sales@xigate.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>&copy; 2026 XiGate Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
