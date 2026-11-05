import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Image placeholder */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl transform rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-background border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                 <span className="text-foreground/40 text-lg">Your Photo Here</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Hello! I'm a passionate developer who enjoys building things that live on the internet. 
              My journey in software development started back in [Year], and since then, I've had the privilege 
              of working on various projects that have helped me grow my skills.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              My main focus these days is building accessible, inclusive products and digital experiences 
              for a variety of clients. I believe in writing clean, maintainable code and always learning 
              new technologies to stay ahead of the curve.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-white/10 bg-white/5 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-foreground/60">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
