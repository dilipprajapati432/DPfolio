import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, ChevronDown, Download, Terminal, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import profileImage from "@/assets/profile-dilip1.jpg";
import resumeFile from "@/assets/DilipKohar_Resume.pdf";

const roles = [
  "Full Stack Web Developer",
  "AI Research Student",
  "Design Enthusiast",
  "Software Engineer",
];

const TypewriterRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl font-medium text-primary italic"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 30, stiffness: 300 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * 20);
    rotateY.set(-x * 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Animated geometric background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-secondary/20 rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-mono text-sm tracking-widest uppercase">Digital Portfolio v2.0</span>
              </motion.div>
              <h1 className="heading-xl gradient-text text-white">
                DILIP PRAJAPATI
              </h1>
              <TypewriterRoles />
            </div>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Specializing in building robust and innovative digital solutions. 
              Bridging the gap between <span className="text-primary font-medium">Artificial Intelligence</span> and 
              <span className="text-secondary font-medium"> Modern Web Architectures</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => window.open(resumeFile, "_blank")}
                className="bg-primary text-primary-foreground px-8 py-6 rounded-full hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all font-bold gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/dilipprajapati432" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/dilip-kohar-014627293" },
                  { icon: Mail, href: "mailto:dilipkohar4320@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, color: "hsl(var(--primary))" }}
                    href={social.href}
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full text-muted-foreground border border-white/10 hover:border-primary/50 transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:flex justify-center relative"
          >
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center transition-all duration-200 ease-out"
            >
              {/* Spinning background rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-15px] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,hsl(var(--primary))_20%,hsl(var(--secondary))_40%,hsl(var(--accent))_60%,hsl(var(--primary))_80%,transparent_100%)] opacity-30 blur-[10px]"
              />

              {/* Profile Image Wrapper */}
              <div 
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-primary/20 group cursor-crosshair shadow-[0_0_50px_rgba(0,255,255,0.2)]"
              >
                <img
                  src={profileImage}
                  alt="Dilip Prajapati"
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/10 opacity-60 group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Floating tech badges */}
              <motion.div
                style={{ transform: "translateZ(80px)" }}
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl border-primary/20 shadow-primary/20 shadow-xl z-20"
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                style={{ transform: "translateZ(100px)" }}
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 p-4 glass-card rounded-2xl border-secondary/20 shadow-secondary/20 shadow-xl z-20"
              >
                <div className="text-[10px] font-bold text-secondary tracking-widest uppercase">System Active</div>
              </motion.div>
            </motion.div>

            {/* Background glows */}
            <div className="absolute inset-[-40px] rounded-full bg-primary/10 blur-[60px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Hero Footnotes */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-50 cursor-pointer hover:text-primary transition-colors"
        onClick={() => {
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1">Explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};
