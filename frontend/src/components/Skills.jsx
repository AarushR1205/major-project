import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'] },
  { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A look at the technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, idx) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillSet.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground/80 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
