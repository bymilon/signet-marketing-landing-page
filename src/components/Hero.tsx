import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-48 pb-20 overflow-hidden min-h-screen flex items-center bg-dark">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 z-0" />
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/5 z-0" />
      
      {/* Side Rail Info */}
      <div className="absolute left-10 bottom-24 origin-bottom-left -rotate-90 hidden lg:block overflow-hidden">
        <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/20 whitespace-nowrap">
          Executive Protocol // Q2-2026 // Global Scale Authorization
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-12 z-10 w-full">
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-8 h-[1px] bg-brand" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand">
              Revenue Engineering
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, x: -20, filter: "blur(20px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[120px] md:text-[180px] font-display font-black leading-[0.8] tracking-[-0.06em] uppercase flex flex-col mb-12"
            >
              <motion.span 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ delay: 0.1, duration: 0.8 }}
              >Email</motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }} 
                animate={{ x: 48, opacity: 1 }} 
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-brand italic tracking-[-0.08em] md:ml-48 relative group/signature"
              >
                Signature
                <motion.span 
                  className="absolute inset-0 bg-white/10 mix-blend-overlay -z-10 w-0 group-hover/signature:w-full transition-all duration-700 ease-in-out"
                />
              </motion.span>
              <motion.span 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
              >Marketing</motion.span>
            </motion.h1>
            
            {/* Elite Stamp */}
            <motion.div 
              initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 12, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute top-0 right-0 hidden xl:flex flex-col items-end pt-12"
            >
              <div className="w-[1px] h-32 bg-white/10 mb-6"></div>
              <div className="border border-white/20 p-6 rounded-full w-28 h-28 flex items-center justify-center text-center backdrop-blur-sm group hover:border-brand transition-colors duration-500 cursor-none">
                <span className="text-[9px] font-black uppercase leading-none tracking-tighter group-hover:text-brand transition-colors">
                  Premium<br/>Enterprise<br/>Standard
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-16 items-start md:items-center mt-8"
          >
            <p className="max-w-md text-xl md:text-2xl font-light leading-snug tracking-tight text-white/60">
              We engineer high-performance signature growth systems for the world's most ambitious software firms.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="px-10 py-5 bg-brand text-dark font-black uppercase tracking-widest text-xs hover:bg-white transition-all transform active:scale-95 shadow-2xl shadow-brand/20">
                Execute Strategy
              </button>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/20 pb-2 hover:border-brand transition-all">
                View Infrastructure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
