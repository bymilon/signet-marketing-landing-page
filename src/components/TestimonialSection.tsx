import { motion } from "motion/react";

export function TestimonialSection() {
  return (
    <section className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="sticky top-32">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-8 block font-mono">
              // VERIFIED_IMPACT
            </span>
            <h2 className="text-8xl font-display font-black leading-[0.8] mb-12 uppercase italic">
              Market <span className="text-brand">Dominance</span> Confirmed
            </h2>
            <p className="text-2xl text-white/40 font-light leading-snug mb-16 max-w-sm">
              We don't just provide software. We provide unfair advantages.
            </p>
            
            <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              <div className="flex flex-col gap-2">
                <span className="text-brand text-2xl font-display italic tracking-normal">+420%</span>
                <span>Avg Growth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-brand text-2xl font-display italic tracking-normal">0.02s</span>
                <span>Latency</span>
              </div>
            </div>
          </div>

          <div className="space-y-px bg-white/5 border border-white/5">
            <TestimonialCard 
              quote="Military-grade automation. I've never seen signature infrastructure deployed this precisely."
              author="MAXIMUS HUNTER"
              role="CTO // NEXUS CORP"
            />
            <TestimonialCard 
              quote="The depth of attribution is terrifying. We see every move before they even make it."
              author="ELARA VANCE"
              role="HEAD OF GROWTH // KINETIC"
            />
            <TestimonialCard 
              quote="This isn't a tool. It's a revenue engine that happens to live in our signatures."
              author="JAXON REED"
              role="STRATEGIST // CODECRAFT"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-16 bg-dark hover:bg-brand transition-all group group-hover:text-dark cursor-none relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono font-black italic">// TRUST_VERIFIED</span>
      </div>
      <div className="text-brand group-hover:text-dark mb-12 text-4xl font-display font-black leading-tight italic uppercase block">
        "{quote}"
      </div>
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h4 className="font-black text-white group-hover:text-dark uppercase tracking-widest text-xs">{author}</h4>
          <p className="text-[10px] text-white/40 group-hover:text-dark/40 font-bold uppercase tracking-[0.2em]">{role}</p>
        </div>
        <div className="w-12 h-[1px] bg-brand group-hover:bg-dark transition-colors" />
      </div>
    </motion.div>
  );
}
