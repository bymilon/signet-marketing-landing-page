import { motion } from "motion/react";
import { Shield, Globe, Zap, Target } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col mb-24 max-w-3xl">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-6 block">
            Core Infrastructure
          </span>
          <h2 className="text-6xl font-display font-black leading-tight mb-8">
            Engineered for <span className="italic text-brand">Superior</span> Performance
          </h2>
          <p className="text-xl text-white/40 font-light">Global scale availability with zero-latency deployment.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {/* Main Large Card */}
          <div className="md:col-span-8 p-16 bg-surface-tint/20 hover:bg-surface-tint/30 transition-all group relative">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
             <div className="flex justify-between items-start mb-12">
               <h3 className="text-4xl font-display font-black italic uppercase">Scalable Dynamics</h3>
               <Zap className="w-8 h-8 text-brand animate-pulse" />
             </div>
            <p className="text-xl text-white/40 mb-12 max-w-lg leading-relaxed">
              Proprietary syncing protocols that unify your entire organization's visual identity across all major email clients.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[Zap, Globe, Target, Shield].map((Icon, i) => (
                <div key={i} className="aspect-square bg-white/5 flex items-center justify-center border border-white/5 hover:border-brand hover:bg-brand/10 transition-all group/icon">
                  <Icon className="w-8 h-8 text-white/20 group-hover/icon:text-brand transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Side Card */}
          <div className="md:col-span-4 p-12 bg-white/5 flex flex-col justify-between border-l border-white/5 group hover:bg-white transition-all duration-500">
            <div className="space-y-6">
              <div className="h-[2px] w-12 bg-brand group-hover:bg-dark" />
              <h3 className="text-3xl font-display font-black leading-none uppercase group-hover:text-dark">Rapid<br/>Deployment</h3>
            </div>
            <div className="mt-12 text-sm font-mono text-white/40 group-hover:text-dark/40 space-y-2 uppercase tracking-widest">
              <div>// TRACE_ID: 9482-A</div>
              <div>// STATUS: STABLE</div>
              <div>// LATENCY: 12ms</div>
            </div>
          </div>

          {/* Security Card */}
          <div className="md:col-span-12 p-16 bg-brand text-dark flex flex-col md:flex-row items-center justify-between gap-12 group cursor-crosshair">
            <div className="max-w-2xl">
              <h3 className="text-5xl font-display font-black italic mb-6 uppercase leading-none">Military-Grade Security</h3>
              <p className="text-lg font-bold uppercase tracking-tight leading-tight">
                Your data is isolated, encrypted, and protected by the most rigorous security standards in the industry.
              </p>
            </div>
            <div className="flex gap-8 items-center shrink-0">
               <div className="text-center font-black uppercase text-[10px] tracking-[0.2em] opacity-40">SOC II // ISO27001 // GDPR</div>
               <div className="w-24 h-24 border-2 border-dark rounded-full flex items-center justify-center font-black text-[10px] uppercase text-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                 Elite<br/>Standard
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
