import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Particle = ({ delay }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0, scale: 0.5 }}
    animate={{
      y: "-10vh",
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1.2, 0.8],
      x: ["0vw", `${Math.random() * 20 - 10}vw`]
    }}
    transition={{
      duration: Math.random() * 5 + 5,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute w-1 h-1 bg-primary/30 rounded-full blur-[1px] pointer-events-none"
    style={{ left: `${Math.random() * 100}vw` }}
  />
);

export const SplashScreen = ({ onFinish }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onFinish, 1200); // Allow exit animation to complete
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // SVG Path variants for the initials
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const containerVariants = {
    exit: {
      scale: 1.2,
      opacity: 0,
      filter: "blur(20px)",
      transition: { duration: 1, ease: "circIn" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05060f] overflow-hidden"
    >
      {/* Premium Noise Background */}
      <div className="absolute inset-0 noise-bg opacity-30" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} delay={i * 0.5} />
      ))}

      {/* Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[130px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* SVG Initials Animation */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            {/* D */}
            <motion.path
              d="M30 20 V80 C30 80 70 80 70 50 C70 20 30 20 30 20"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* P */}
            <motion.path
              d="M71 20 V80 M71 20 C71 20 96 20 96 40 C96 60 71 60 71 60"
              fill="transparent"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Defs for gradients */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glowing Ring around logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute inset-0 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t border-primary/20 rounded-full"
          />
        </div>

        {/* Name Reveal */}
        <div className="overflow-hidden flex flex-col items-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light tracking-[0.4em] uppercase text-white/90 mb-2"
          >
            DILIP <span className="font-black text-primary">PRAJAPATI</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 3.5, duration: 1, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="mt-4 text-[10px] tracking-[0.6em] text-muted-foreground uppercase"
          >
            Portfolio Experience
          </motion.p>
        </div>
      </div>

      {/* Bottom Progress Indicator (Minimalist) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 4.5, ease: "easeInOut" }}
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
        />
      </div>

      {/* Corner Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 text-[10px] font-mono text-white/20 tracking-widest hidden md:block"
      >
        L_INIT_SEQUENCE_SUCCESS
      </motion.div>
    </motion.div>
  );
};
