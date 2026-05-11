import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8">
      <div className="flex items-center gap-12 px-12 max-w-7xl w-full justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 90, scale: 1.2 }}
            className="w-5 h-5 bg-brand transition-all duration-500 ease-in-out" 
          />
          <span className="font-display font-black text-2xl tracking-tighter uppercase italic group-hover:text-brand transition-colors">Signet</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
          <NavItem label="Strategic Audit" active />
          <NavItem label="Growth Systems" />
          <NavItem label="Case Studies" />
          <NavItem label="Pricing" />
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-4 px-4 py-2 border border-white/10 glass">
            <div className="relative">
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex" />
              <span className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-brand animate-ping opacity-75" />
            </div>
            <span className="text-[8px] font-mono font-bold text-white/40 tracking-[0.2em] uppercase">Auth_Nexus_Stable</span>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-[0.1em] hover:text-brand transition-colors">
            Login
          </button>
          <button className="text-[10px] font-bold uppercase tracking-[0.1em] border border-white/20 px-6 py-2.5 hover:bg-white hover:text-dark transition-all">
            Join Nexus
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={cn(
        "transition-all hover:text-white relative group",
        active ? "text-brand" : ""
      )}
    >
      {label}
      <span className={cn(
        "absolute -bottom-1 left-0 h-[1px] bg-brand transition-all duration-300",
        active ? "w-full" : "w-0 group-hover:w-full"
      )} />
    </button>
  );
}
