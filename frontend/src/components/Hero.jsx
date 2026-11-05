import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Your Name</span>
            <br />
            <span className="text-foreground/80">Full Stack Developer.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            I build exceptional and accessible digital experiences for the web. Let's turn your ideas into reality.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-foreground font-medium hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
