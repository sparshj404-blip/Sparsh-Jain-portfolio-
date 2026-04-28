import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-20 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 tracking-tighter">
            Skill <span className="text-white/20 italic">Matrix</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-sm">Engineered for precision</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-none"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-[0.3em]">
                  Stack // 0{index + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-white/30 transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold mb-2 uppercase tracking-tight group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
                 {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
