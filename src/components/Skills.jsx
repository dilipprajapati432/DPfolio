import { Code, Database, Brain, Users2 } from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Web Development",
      icon: Code,
      color: "text-primary",
      description: "Building responsive, interactive, and performant user interfaces",
      skills: ["React.js", "HTML5 & CSS3", "JavaScript ES6+", "Tailwind CSS", "Responsive Design", "UI/UX Implementation"],
      proficiency: 85,
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-accent",
      description: "Server-side logic, database design, and API development",
      skills: ["Flask", "Python", "MySQL", "REST APIs", "Database Design", "Authentication"],
      proficiency: 75,
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "text-primary",
      description: "Exploring machine learning concepts and intelligent systems",
      skills: ["Python", "TensorFlow Basics", "Data Analysis", "ML Concepts", "AI Ethics", "Problem Solving"],
      proficiency: 70,
    },
    {
      title: "Leadership & Teamwork",
      icon: Users2,
      color: "text-accent",
      description: "Collaborative development and project management",
      skills: ["Team Collaboration", "Project Coordination", "Agile Methodology", "Code Reviews", "Mentoring", "Communication"],
      proficiency: 80,
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4"
          >
            Advanced Skill Development
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Continuously developing technical expertise and professional competencies
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-primary/20 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Proficiency Level</span>
                    <span className="text-sm font-bold text-accent">{category.proficiency}%</span>
                  </div>
                  <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.proficiency}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/30 text-foreground rounded-lg border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-xl border border-white/5"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Additional Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Projects Completed", value: "5+", color: "text-primary" },
              { label: "Certifications Earned", value: "4+", color: "text-accent" },
              { label: "Academic CGPA", value: "7.49", color: "text-primary" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="glass-card p-6 rounded-lg mb-3 border border-white/5 hover:border-primary/10 transition-colors">
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
};