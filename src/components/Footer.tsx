import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-32 pb-16 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="w-5 h-5 bg-brand group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-display font-black text-3xl tracking-tighter uppercase italic">Signet</span>
            </div>
            <p className="text-white/40 max-w-sm mb-12 text-xl font-light leading-snug">
              Building high-performance growth infrastructure for the world's most ambitious software firms.
            </p>
            <div className="flex gap-12 font-bold uppercase tracking-[0.2em] text-[10px]">
              <button className="hover:text-brand transition-colors">Twitter</button>
              <button className="hover:text-brand transition-colors">LinkedIn</button>
              <button className="hover:text-brand transition-colors">GitHub</button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-xs mb-8 uppercase tracking-[0.3em] text-brand">Systems</h4>
            <ul className="space-y-4">
              {["Audit", "Nexus", "Forge", "Analytics", "Pricing"].map(item => (
                <li key={item}>
                  <button className="text-white/40 hover:text-white transition-colors flex items-center group text-xs font-bold uppercase tracking-widest">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 ml-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-xs mb-8 uppercase tracking-[0.3em] text-brand">Protocol</h4>
            <ul className="space-y-4">
              {["Archive", "Careers", "Security", "Privacy", "Status"].map(item => (
                <li key={item}>
                  <button className="text-white/40 hover:text-white transition-colors flex items-center group text-xs font-bold uppercase tracking-widest">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 ml-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 SIGNET TECHNOLOGIES // ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              SYSTEMS_OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
