import { Github, ExternalLink, Code2, Globe, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ResumeIQ — ATS Resume Checker",
    description: "An AI-powered recruitment tool that analyzes resumes against job descriptions to provide optimization scores and feedback.",
    tags: ["React", "Flask", "Python", "Vite"],
    github: "https://github.com/dilipprajapati432/ResumeIQ-ATS-Resume-Checker",
    demo: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MedBot AI — Medical Assistant",
    description: "A specialized medical chatbot designed to assist with preliminary health diagnostics and automated consultations.",
    tags: ["Flask", "NLP", "Python", "JavaScript"],
    github: "https://github.com/dilipprajapati432/MedBot-AI-medical-assistant",
    demo: "#",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Crop Disease Detector",
    description: "An AI project utilizing image classification to detect various plant diseases using the PlantVillage dataset.",
    tags: ["AI", "Python", "Deep Learning"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1530836361253-efad5cb2fe20?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "To-Do List Web Application",
    description: "A full-stack task management application with a Flask backend and MySQL relational database integration.",
    tags: ["Flask", "MySQL", "Full Stack"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2070&auto=format&fit=crop",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">Project Archive</span>
            </div>
            <h2 className="heading-lg">SELECTED WORKS</h2>
          </div>
          
          <Button variant="outline" className="rounded-full border-white/10 hover:border-primary/50 transition-all font-mono gap-2 hidden md:flex">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group rounded-3xl overflow-hidden border-white/5 hover:border-primary/20 transition-all shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    className="p-4 bg-white/10 rounded-full border border-white/20 hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    className="p-4 bg-white/10 rounded-full border border-white/20 hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/80 bg-primary/5 px-2 py-1 rounded border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                   <a 
                     href={project.github} 
                     target="_blank"
                     className="text-[10px] font-bold text-primary flex items-center gap-2 uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                   >
                     Inspect Source <ArrowRight className="w-3 h-3" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative backdrop */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-96 bg-primary/5 blur-[100px] -z-10 rounded-full" />
    </section>
  );
};
