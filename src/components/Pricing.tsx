import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const plans = [
  {
    name: "01/ STRATEGIST",
    description: "Core signature growth systems for emerging teams.",
    price: "FREE",
    cta: "Initialize",
    features: [
      "Signature Compiler",
      "Unified Dashboard",
      "Global CDN Edge",
      "Basic Analytics"
    ]
  },
  {
    name: "02/ NEXUS PRO",
    description: "Expanded infrastructure for high-velocity organizations.",
    price: "$120",
    period: "/MO",
    cta: "Authorize",
    featured: true,
    features: [
      "Real-time Attribution",
      "Collaborative Forge",
      "Priority API Access",
      "Custom Compliance",
      "Advanced Intelligence"
    ]
  },
  {
    name: "03/ ARCHITECT",
    description: "Private dedicated systems for global enterprises.",
    price: "CUSTOM",
    cta: "Consult",
    features: [
      "White-label Infrastructure",
      "Zero-latency Edge",
      "SOC-II Compliance",
      "Dedicated Strategist",
      "Strategic Governance"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-32 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl border-l border-brand pl-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-4 block">
              Investment Tiers
            </span>
            <h2 className="text-6xl font-display font-black leading-none uppercase">
              Elite <span className="italic text-brand text-7xl">Protocols</span>
            </h2>
          </div>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold whitespace-nowrap">
            Q2-2026 BENCHMARK PRICING
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-12 transition-all flex flex-col h-full bg-dark group",
                plan.featured ? "relative overflow-hidden" : ""
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 p-4">
                   <div className="bg-brand text-dark text-[8px] font-black px-3 py-1 uppercase tracking-widest rotate-6">Peak Optimization</div>
                </div>
              )}
              
              <h3 className="text-xs font-black tracking-[0.3em] text-white/50 mb-8 border-b border-white/10 pb-4 group-hover:text-brand transition-colors">
                {plan.name}
              </h3>
              
              <div className="mb-12">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-display font-black tracking-tighter uppercase">{plan.price}</span>
                  {plan.period && <span className="text-sm font-bold text-white/20 uppercase tracking-widest">{plan.period}</span>}
                </div>
                <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
                  {plan.description}
                </p>
              </div>

              <button className={cn(
                "w-full py-5 font-black uppercase tracking-widest text-xs mb-12 transition-all group/btn relative overflow-hidden",
                plan.featured 
                  ? "bg-brand text-dark" 
                  : "bg-white/5 text-white hover:border-brand"
              )}>
                <span className="relative z-10 group-hover/btn:scale-110 transition-transform block">{plan.cta}</span>
                {plan.featured && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white/20 skew-x-12"
                  />
                )}
              </button>

              <div className="space-y-4 mt-auto">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-4 text-white/40 group-hover:text-white/60 transition-colors">
                    <div className={cn("w-1 h-1 rounded-full", plan.featured ? "bg-brand" : "bg-white/20")} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
