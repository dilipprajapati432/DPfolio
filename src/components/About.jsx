import { User, Target, BadgeCheck, Code2, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const stats = [
    { label: "B.Tech CSE", value: "3rd Year", icon: Cpu },
    { label: "PDEU", value: "India", icon: Globe },
    { label: "CGPA", value: "7.5", icon: BadgeCheck },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">ABOUT ME</h2>
              <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-6">
                "Creating seamless digital experiences with a focus on AI-driven innovation and performant architectures."
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated Computer Science student with a passion for building complex software systems. 
              My journey involves exploring the depths of full-stack development while integrating cutting-edge 
              machine learning concepts into practical web applications.
            </p>
          </div>

          {/* Visual Elements */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative glass-card aspect-square rounded-[3rem] p-8 flex items-center justify-center overflow-hidden border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                    className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10"
                  />
                ))}
              </div>

              {/* Animated orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] h-[120%] border border-primary/10 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[140%] h-[140%] border border-secondary/10 rounded-full border-dashed"
              />
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
