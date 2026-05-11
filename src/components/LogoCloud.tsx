import { motion } from "motion/react";

const logos = [
  "Ephemeral", "Wildcrafted", "Codecraft_", "Convergence", "ImgCompress",
  "Epicurious", "Watchtower", "Renaissance", "ContrastAI", "Nietzsche"
];

export function LogoCloud() {
  return (
    <section className="py-20 border-y border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-8 mb-16 px-4 border-l border-brand">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.4em] text-white/40 italic"
          >
            Global Infrastructure Nexus
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.2em] text-white/20"
          >
            Authorized Deployment 2026
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-8">
          {logos.map((logo, i) => (
            <motion.div 
              key={logo}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.1, color: "#E7FF00", transition: { duration: 0.2 } }}
              className="flex items-center justify-center text-xs font-black uppercase tracking-[0.3em] text-white/30 transition-all cursor-crosshair"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
