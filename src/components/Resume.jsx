import { GraduationCap, Briefcase, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import javaCert from "@/assets/Java_Certificate.pdf";
import aiCert from "@/assets/AI Essentials Workshop.jpeg";
import webCert from "@/assets/web development by ACM.pdf";
import hackCert from "@/assets/Ethical Hacking workshop.pdf";
import resumeFile from "@/assets/DilipKohar_Resume.pdf";

export const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "Gandhinagar, Gujarat, India",
      duration: "2023 - 2027",
      grade: "7.5 CGPA",
      current: true,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Siddhartha English Boarding School",
      location: "Butwal, Rupandehi, Nepal",
      duration: "2019 - 2021",
      grade: "3.19 GPA",
      current: false,
    },
  ];

  const experience = [
    {
      title: "Web Developer Intern",
      company: "InternPe",
      location: "Remote",
      duration: "Aug 2024 - Sep 2024",
      responsibilities: [
        "Focused on creating responsive web pages and refining user interfaces.",
        "Implemented frontend components using modern React patterns.",
        "Collaborated on improving site performance and accessibility.",
      ],
    },
  ];

  const certifications = [
    { name: "Java Programming", issuer: "LearnTube", year: "2024", link: javaCert },
    { name: "AI Essentials Workshop", issuer: "PDEU", year: "2024", link: aiCert },
    { name: "Web Development Bootcamp", issuer: "ACM-PDEU", year: "2023", link: webCert },
    { name: "Ethical Hacking Workshop", issuer: "IEEE PDEU", year: "2024", link: hackCert },
  ];

  return (
    <section id="resume" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="heading-lg">RESUME</h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Experience */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight uppercase">Academic Journey</h3>
              </div>

              <div className="space-y-8 relative pl-8 border-l border-white/10 ml-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                    <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-4">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground/60">
                        <span>{edu.location}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-primary font-bold">{edu.grade}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/5 rounded-xl text-secondary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight uppercase">Experience</h3>
              </div>

              <div className="space-y-8 relative pl-8 border-l border-white/10 ml-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-background border-2 border-secondary shadow-[0_0_10px_rgba(255,0,255,0.5)]" />
                    <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-secondary/20 transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <span className="text-[10px] font-mono font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-secondary font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Skills */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold italic tracking-tight uppercase">Certifications</h3>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl border-white/5 hover:border-accent/40 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1 text-left">
                    <h4 className="text-lg font-bold group-hover:text-accent transition-colors">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground italic">{cert.issuer} • {cert.year}</p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={cert.link}
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full text-muted-foreground hover:text-accent transition-colors border border-white/10 hover:border-accent/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
            
            <div className="relative glass-card p-8 rounded-3xl border-primary/20 bg-gradient-to-br from-primary/5 to-transparent flex flex-col items-center text-center gap-6 overflow-hidden">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-2 shadow-2xl">
                  <Download className="w-8 h-8" />
               </div>
               <div className="space-y-2">
                 <h4 className="text-xl font-bold tracking-tight uppercase">Need a physical copy?</h4>
                 <p className="text-sm text-muted-foreground">My full technological dossier is available in PDF format.</p>
               </div>
               <Button 
                onClick={() => window.open(resumeFile, "_blank")}
                className="w-full bg-primary text-primary-foreground font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all"
               >
                 Download Complete CV
               </Button>
               {/* Background visual decorator */}
               <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
