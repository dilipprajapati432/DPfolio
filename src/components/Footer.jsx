import { Github, Linkedin, Mail, Cpu, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 border-t border-white/5 overflow-hidden bg-white/[0.01]">
      {/* Animated Background Laser Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [-500, 500], opacity: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" 
        />
        <motion.div 
          animate={{ x: [500, -500], opacity: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" 
        />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-10" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-secondary/10 via-transparent to-transparent opacity-10" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left: Identity & Status */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-4xl font-black bg-gradient-to-r from-[#ff0000] via-[#00ffff] to-[#8b00ff] bg-clip-text text-transparent tracking-tighter leading-none animate-pulse">
                DILIP_PRAJAPATI
              </h2>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/40">Personal_Portfolio_v2.0</p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_#00ffff]" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary/80">Status: Operational</span>
               </div>
               <span className="text-[10px] font-medium text-muted-foreground/30 italic">© {currentYear}</span>
            </div>
          </div>

          {/* Center: Social Core with Multi-Color Glows */}
          <div className="relative">
            <div className="absolute inset-[-40px] bg-primary/5 blur-3xl rounded-full -z-10" />
            
            <div className="flex gap-6">
               {[
                 { icon: Github, href: "https://github.com/dilipprajapati432", label: "GIT", glow: "group-hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]", border: "group-hover:border-primary/50" },
                 { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293", label: "LNK", glow: "group-hover:shadow-[0_0_25px_rgba(139,0,255,0.4)]", border: "group-hover:border-secondary/50" },
                 { icon: Mail, href: "mailto:dilipkohar4320@gmail.com", label: "MAI", glow: "group-hover:shadow-[0_0_25px_rgba(0,255,127,0.4)]", border: "group-hover:border-accent/50" }
               ].map((social, i) => (
                 <motion.a 
                   key={i}
                   whileHover={{ y: -8 }}
                   href={social.href} 
                   target="_blank"
                   className="group flex flex-col items-center gap-3"
                 >
                    <div className={`w-14 h-14 glass-card rounded-2xl flex items-center justify-center border-white/5 ${social.border} ${social.glow} transition-all duration-500`}>
                       <social.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <span className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/30 group-hover:text-primary transition-colors">{social.label}</span>
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Right: Technical Specs & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-6">
             <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                   <Cpu className="w-3 h-3 animate-spin-slow" /> Engineered_With_Precision
                </div>
                <p className="text-[10px] text-muted-foreground/60 font-medium">
                  React 18.3 • Framer Motion • Tailwind CSS
                </p>
             </div>

             <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={scrollToTop}
               className="group flex items-center gap-3 px-6 py-3 glass-card rounded-2xl border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]"
             >
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Back_to_Top</span>
                <ArrowUp className="w-4 h-4 text-primary group-hover:animate-bounce" />
             </motion.button>
          </div>

        </div>

        {/* Bottom Abstract Decoration */}
        <div className="mt-20 flex items-center gap-8">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-secondary/30" />
           <Sparkles className="w-4 h-4 text-primary/30 animate-pulse" />
           <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-secondary/30" />
        </div>
      </div>
    </footer>
  );
};
