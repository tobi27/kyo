import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
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
          <p>&copy; {new Date().getFullYear()} XiGate Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">SOC2 Type II Certified &bull; GDPR Compliant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
