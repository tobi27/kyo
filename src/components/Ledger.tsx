import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface Transaction {
  id: string;
  customer: string;
  workflow: string;
  cost: number;
  billed: number;
  margin: string;
  status: 'Settled' | 'In-Flight' | 'Blocked';
}

const CUSTOMERS = ['Acme Corp', 'TechFlow', 'DataPrime', 'Nexus AI', 'Cortex Labs', 'FinServe', 'CloudOps'];
const WORKFLOWS = ['Lead Enrichment', 'Doc Processing', 'Code Review', 'Data Pipeline', 'Support Triage', 'Risk Analysis', 'Report Gen'];

const INITIAL_DATA: Transaction[] = [
  { id: 'TSK-3039', customer: 'Acme Corp', workflow: 'Lead Enrichment', cost: 0.42, billed: 8.50, margin: '95.1%', status: 'In-Flight' },
  { id: 'TSK-6181', customer: 'TechFlow', workflow: 'Doc Processing', cost: 1.23, billed: 0.00, margin: '0.0%', status: 'Blocked' },
  { id: 'TSK-5036', customer: 'DataPrime', workflow: 'Code Review', cost: 0.89, billed: 15.00, margin: '94.1%', status: 'Settled' },
  { id: 'TSK-5758', customer: 'Nexus AI', workflow: 'Data Pipeline', cost: 2.15, billed: 0.00, margin: '0.0%', status: 'Blocked' },
  { id: 'TSK-9605', customer: 'Cortex Labs', workflow: 'Support Triage', cost: 0.67, billed: 12.00, margin: '94.4%', status: 'Settled' },
];

const Ledger: React.FC = () => {
  const [rows, setRows] = useState<Transaction[]>(INITIAL_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prev => {
        const randId = Math.floor(Math.random() * 9000 + 1000);
        const randCustomer = CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)];
        const randWorkflow = WORKFLOWS[Math.floor(Math.random() * WORKFLOWS.length)];
        const cost = Number((Math.random() * 2 + 0.3).toFixed(2));
        const billed = Number((Math.random() * 15 + 5).toFixed(2));
        const marginVal = ((billed - cost) / billed * 100).toFixed(1);
        const newRow: Transaction = {
          id: 'TSK-' + randId,
          customer: randCustomer,
          workflow: randWorkflow,
          cost,
          billed,
          margin: marginVal + '%',
          status: 'In-Flight'
        };
        const updated = [newRow, ...prev.slice(0, 4)].map((r, i) =>
          i > 0 && r.status === 'In-Flight' ? { ...r, status: Math.random() > 0.2 ? 'Settled' : 'Blocked' } : r
        );
        return updated as Transaction[];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Settled': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'In-Flight': return <Clock className="w-4 h-4 text-blue-500 animate-pulse" />;
      case 'Blocked': return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <div className="relative group">
      <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#080c14]/90">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Operational Clearing</p>
            <p className="text-[10px] text-slate-600 mt-1">VPC Node: xi-west-01</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-500 tracking-wider">Signed Finality</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-medium text-slate-500 uppercase tracking-widest border-b border-white/5">
                <th className="py-3 px-6">Task ID</th>
                <th className="py-3 px-4">Customer / Workflow</th>
                <th className="py-3 px-4 text-right">Cost</th>
                <th className="py-3 px-4 text-right">Billed</th>
                <th className="py-3 px-4 text-right">Margin</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {rows.map((row, idx) => (
                <tr key={row.id + idx} className={'border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors ' + (idx === 0 ? 'bg-blue-500/[0.03]' : '')}>
                  <td className="py-3 px-6">
                    <span className="text-slate-300">{row.id}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-slate-300 font-sans text-xs">{row.customer}</span>
                      <span className="text-[10px] text-slate-600">{row.workflow}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right text-slate-400">{'$'}{row.cost.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right text-emerald-400">{row.billed > 0 ? '+$' + row.billed.toFixed(2) : '-'}</td>
                  <td className="py-3 px-4 text-right text-slate-300">{row.margin}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <span className={'text-[10px] ' + (row.status === 'Settled' ? 'text-emerald-500' : row.status === 'Blocked' ? 'text-red-500' : 'text-blue-500')}>
                        {row.status}
                      </span>
                      {getStatusIcon(row.status)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span className="text-[10px] text-slate-500">Receipt Verified</span>
          </div>
          <span className="text-[10px] text-slate-600 font-mono">0x8a2...f2e</span>
        </div>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl blur-lg -z-10 opacity-20 group-hover:opacity-40 transition-opacity"></div>
    </div>
  );
};

export default Ledger;
