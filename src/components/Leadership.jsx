import { Users, Trophy, Heart, Code, Quote, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const teamProjects = [
  {
    title: "E-Form Management System",
    role: "Database Architect & Liaison",
    description: "Spearheaded the integration of relational database nodes for a high-traffic E-Form management system, ensuring optimized query performance and data integrity.",
    icon: Code,
    color: "text-primary",
    highlights: ["Query Optimization", "Cross-team Liaison", "System Scalability"],
  },
  {
    title: "Innovation Cluster",
    role: "Lead Tech Strategist",
    description: "Coordinated technical brainstorming protocols for rapid prototyping sprints, bridging the gap between design research and implementation logic.",
    icon: Users,
    color: "text-secondary",
    highlights: ["Agile Protocols", "Strategic Syncs", "Asset Management"],
  },
];

const qualities = [
  { title: "Empathetic Connection", desc: "Understanding team bandwidth and individual growth vectors to optimize collective output." },
  { title: "Strategic Vision", desc: "Predicting system requirements and scaling technical stacks ahead of operational demands." },
  { title: "Resilient Leadership", desc: "Maintaining high-velocity output under project stress and complex debugging cycles." },
];

export const Leadership = () => {
  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-primary/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">Strategic / Direction</span>
            </div>
            <h2 className="heading-lg">LEADERSHIP</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content: Projects */}
          <div className="lg:col-span-8 space-y-12">
            {teamProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-10 md:p-14 rounded-[2.5rem] border-white/5 relative group hover:border-primary/20"
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 transition-all duration-500 shadow-2xl"
                    >
                      <project.icon className="h-7 w-7" />
                    </motion.div>
                    <div className="space-y-1">
                       <h3 className="text-2xl font-bold tracking-tight uppercase italic">{project.title}</h3>
                       <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${project.color}`}>
                            {project.role}
                          </span>
                       </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                    {project.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Content: Qualities & Accolades */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="glass-card p-10 rounded-[2.5rem] border-white/5 group hover:border-primary/20 shadow-2xl"
            >
               <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                     <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest italic">Core Traits</h3>
               </div>
               <div className="space-y-8">
                  {qualities.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="space-y-2 group/trait"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-primary/60 group-hover/trait:text-primary transition-colors">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed italic border-l border-white/10 pl-4 group-hover/trait:border-primary/40 transition-colors">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               viewport={{ once: true }}
               className="glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/[0.05] to-transparent border-primary/10 relative overflow-hidden group hover:border-primary/40 transition-all shadow-2xl"
            >
               <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                     <Rocket className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-xs font-bold uppercase tracking-widest italic">Next Objective</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                       Actively pursuing <span className="text-primary font-bold">Summer 2026</span> internships in AI Research, Full-Stack Architecture, or Cybersecurity.
                     </p>
                  </div>
               </div>
               {/* Ambient Decorator */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
