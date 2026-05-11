import { motion } from "motion/react";
import { BarChart3, Layout, Terminal } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Features() {
  return (
    <section className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
          <div className="border-l-4 border-brand pl-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-6 block">
              Strategic Assets
            </span>
            <h2 className="text-7xl font-display font-black leading-[0.9] text-white">
              Growth <span className="italic text-brand">Architecture</span> on Autopilot
            </h2>
          </div>
          <div className="flex flex-col items-start gap-8">
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-md">
              Deploy military-grade signature infrastructure designed to scale with your organization's explosive growth.
            </p>
            <button className="px-12 py-5 bg-white text-dark font-black uppercase tracking-widest text-xs hover:bg-brand transition-all">
              Initialize Nexus
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          <FeatureCard 
            icon={<BarChart3 className="w-10 h-10" />}
            number="01"
            title="Revenue Intelligence"
            description="Deep-stack analytics providing granular attribution for every single pixel sent. Track velocity, conversion, and global reach in real-time."
          />
          <FeatureCard 
            icon={<Terminal className="w-10 h-10" />}
            number="02"
            title="The Forge"
            description="Our advanced signature compiler. High-precision templating that maintains brand integrity across every client, vendor, and device."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, number, title, description }: { icon: React.ReactNode; number: string; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      className="p-16 bg-dark/50 group cursor-crosshair transition-colors"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="text-brand group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <span className="text-[10px] font-mono font-bold text-white/20 tracking-widest group-hover:text-brand transition-colors">
          ASSET_{number}
        </span>
      </div>
      <h3 className="text-4xl font-display font-black mb-6 text-white group-hover:text-brand transition-colors italic uppercase">{title}</h3>
      <p className="text-white/40 font-light leading-relaxed text-lg group-hover:text-white/60 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}
