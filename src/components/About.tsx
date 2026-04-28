import { motion } from 'motion/react';
import { PERSONAL_DETAILS } from '../constants';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-20 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-brand-gray border border-white/5 rounded-2xl overflow-hidden relative"
          >
            {/* Abstract visual since we don't have a photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-black opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <span className="text-6xl font-black text-white/10 uppercase select-none leading-none">
                Data<br/>Driven<br/>Logic
              </span>
            </div>
            <div className="absolute bottom-10 left-10 text-white/20 font-mono text-xs tracking-widest">
              ST_JAIN_SYSTEMS_01
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="border-l-2 border-white/20 pl-8 py-2">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-4 text-white/40">The Philosophy</h2>
              <p className="text-3xl md:text-5xl leading-tight font-light italic text-white/95 tracking-tight">
                "I transform raw data into <span className="text-white/40">actionable insights</span>, bridging the gap between BBA business strategy and technical precision."
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-xl">
              {PERSONAL_DETAILS.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-12"
          >
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Based in</h4>
              <p className="text-lg">India</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Experience</h4>
              <p className="text-lg">15+ Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
