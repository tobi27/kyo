import React, { useState, useEffect } from 'react';
import { TaskRow } from '../types';
import { Activity, Zap, CheckCircle2, AlertOctagon } from 'lucide-react';

const INITIAL_DATA: TaskRow[] = [
  { id: '8a92-f3', timestamp: '10:42:01', project: 'Acme_Q3', workflow: 'Legal_Audit', cost: 0.420, billed: 1.50, margin: '72%', status: 'Complete' },
  { id: '7b3e-1d', timestamp: '10:42:05', project: 'Globex_Gen', workflow: 'RAG_Pipeline', cost: 0.125, billed: 0.50, margin: '76%', status: 'Complete' },
  { id: '2c4j-5k', timestamp: '10:42:08', project: 'Int_Test', workflow: 'Unit_Swarm', cost: 0.000, billed: 0.00, margin: '-', status: 'Cap Hit' },
  { id: '8m9n-0p', timestamp: '10:42:12', project: 'Soylent_V', workflow: 'Img_Synth', cost: 0.850, billed: 2.00, margin: '57%', status: 'Processing' },
];

const Ledger: React.FC = () => {
  const [rows, setRows] = useState<TaskRow[]>(INITIAL_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prev => {
        const newRow: TaskRow = {
          id: Math.random().toString(16).substr(2, 4) + '-' + Math.random().toString(16).substr(2, 2),
          timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' }),
          project: Math.random() > 0.5 ? 'Nexus_Ops' : 'Stark_Ind',
          workflow: Math.random() > 0.5 ? 'Research' : 'Code_Gen',
          cost: Number((Math.random() * 0.5).toFixed(3)),
          billed: Number((Math.random() * 1.5).toFixed(2)),
          margin: `${Math.floor(Math.random() * 30 + 50)}%`,
          status: 'Processing'
        };
        const updated = [newRow, ...prev.slice(0, 4)].map(r =>
          r.status === 'Processing' && r.id !== newRow.id ? { ...r, status: Math.random() > 0.1 ? 'Complete' : 'Cap Hit' } : r
        );
        return updated as TaskRow[];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      <div className="glass-panel rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-900/10 border border-white/5 bg-[#080c14]/80">

        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-500 tracking-wider">LIVE MAINNET</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">block: 19,204,291</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-blue-500" />
              <span>241 TPS</span>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="relative min-h-[300px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-medium text-slate-500 uppercase tracking-widest border-b border-white/5">
                <th className="py-4 pl-6 font-normal">Tx Hash</th>
                <th className="py-4 font-normal hidden sm:table-cell">Context</th>
                <th className="py-4 text-right font-normal text-slate-400">Cost</th>
                <th className="py-4 text-right font-normal text-emerald-500/80">Value</th>
                <th className="py-4 pr-6 text-right font-normal">State</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {rows.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`
                    border-b border-white/[0.02] transition-colors hover:bg-white/[0.02]
                    ${idx === 0 ? 'animate-pulse bg-blue-500/[0.02]' : ''}
                  `}
                >
                  <td className="py-4 pl-6 text-slate-400">
                    <span className="text-slate-600">0x</span>{row.id}
                  </td>
                  <td className="py-4 hidden sm:table-cell">
                    <div className="flex flex-col">
                      <span className="text-slate-300">{row.workflow}</span>
                      <span className="text-[10px] text-slate-600">{row.project}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right text-slate-500">
                    ${row.cost.toFixed(3)}
                  </td>
                  <td className="py-4 text-right text-emerald-400 font-medium">
                    +${row.billed.toFixed(2)}
                  </td>
                  <td className="py-4 pr-6 text-right">
                    {row.status === 'Processing' && <Activity className="w-4 h-4 text-blue-500 animate-spin ml-auto" />}
                    {row.status === 'Complete' && <CheckCircle2 className="w-4 h-4 text-emerald-900/80 ml-auto" />}
                    {row.status === 'Cap Hit' && <AlertOctagon className="w-4 h-4 text-red-500/80 ml-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080c14] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl blur-lg -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
    </div>
  );
};

export default Ledger;
