import { motion } from 'motion/react';
import { TIMELINE } from '../constants';

export default function Timeline() {
  return (
    <section id="journey" className="py-32 px-6 md:px-20 bg-brand-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            The <span className="text-white/20 italic">Timeline</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-sm italic">
            "Continuously evolving with new technologies to enhance analytical capabilities and productivity."
          </p>
        </motion.div>

        <div className="space-y-6">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-2xl backdrop-blur-xl group hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-center text-xs font-mono mb-6">
                <span className="text-white font-bold tracking-widest">{item.year}</span>
                <span className="flex-grow mx-6 h-px bg-white/10 group-hover:bg-white/20 transition-colors" />
                <span className="text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-[0.2em]">{item.task}</span>
              </div>
              <p className="text-white/50 text-base font-light italic leading-snug max-w-2xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
