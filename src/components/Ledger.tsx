import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface Transaction {
  id: string;
  agentId: string;
  cost: number;
  revenue: number;
  margin: string;
  status: 'Settled' | 'In-Flight' | 'Blocked';
}

const INITIAL_DATA: Transaction[] = [
  { id: 'X-XI-3039', agentId: 'agent_96', cost: 0.007, revenue: 1.55, margin: '96.0%', status: 'In-Flight' },
  { id: 'X-XI-6181', agentId: 'agent_19', cost: 0.011, revenue: 1.72, margin: '0.0%', status: 'Blocked' },
  { id: 'X-XI-5036', agentId: 'agent_82', cost: 0.034, revenue: 1.29, margin: '99.0%', status: 'Settled' },
  { id: 'X-XI-5758', agentId: 'agent_82', cost: 0.066, revenue: 0.32, margin: '0.0%', status: 'Blocked' },
  { id: 'X-XI-9605', agentId: 'agent_88', cost: 0.118, revenue: 2.37, margin: '97.0%', status: 'Settled' },
];

const Ledger: React.FC = () => {
  const [rows, setRows] = useState<Transaction[]>(INITIAL_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prev => {
        const randId = Math.floor(Math.random() * 9000 + 1000);
        const randAgent = Math.floor(Math.random() * 99);
        const newRow: Transaction = {
          id: 'X-XI-' + randId,
          agentId: 'agent_' + randAgent,
          cost: Number((Math.random() * 0.15).toFixed(3)),
          revenue: Number((Math.random() * 2.5 + 0.3).toFixed(2)),
          margin: Math.floor(Math.random() * 30 + 70) + '.0%',
          status: 'In-Flight'
        };
        const updated = [newRow, ...prev.slice(0, 4)].map((r, i) =>
          i > 0 && r.status === 'In-Flight' ? { ...r, status: Math.random() > 0.2 ? 'Settled' : 'Blocked' } : r
        );
        return updated as Transaction[];
      });
    }, 3000);
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
                <th className="py-3 px-6">TaskID / Identity</th>
                <th className="py-3 px-4 text-right">Actual Cost</th>
                <th className="py-3 px-4 text-right">Revenue</th>
                <th className="py-3 px-4 text-right">Margin</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {rows.map((row, idx) => (
                <tr key={row.id + idx} className={'border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors ' + (idx === 0 ? 'bg-blue-500/[0.03]' : '')}>
                  <td className="py-3 px-6">
                    <div className="flex flex-col">
                      <span className="text-slate-300">{row.id}</span>
                      <span className="text-[10px] text-slate-600">aid:{row.agentId}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right text-slate-400">{'$'}{row.cost.toFixed(3)}</td>
                  <td className="py-3 px-4 text-right text-emerald-400">{'+$'}{row.revenue.toFixed(2)}</td>
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
