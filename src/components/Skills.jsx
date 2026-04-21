import { Code2, Server, Layout, Database, Terminal, Shield, Workflow, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Architecture",
    icon: Server,
    skills: [
      { name: "C++ / DSA", level: 85 },
      { name: "Java Core", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    title: "Client-Side Engineering",
    icon: Layout,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Operations & Logic",
    icon: Terminal,
    skills: [
      { name: "Docker", level: 65 },
      { name: "Git / CI-CD", level: 85 },
      { name: "Express.js", level: 80 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="heading-lg">TECH STACK</h2>
          <div className="h-1 w-20 bg-primary rounded-full group-hover:w-32 transition-all" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold tracking-tight uppercase italic">{category.title}</h3>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-mono text-muted-foreground uppercase tracking-widest">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Background Decorative Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 blur-[120px] -z-10 rounded-full" />
      </div>
    </section>
  );
};
