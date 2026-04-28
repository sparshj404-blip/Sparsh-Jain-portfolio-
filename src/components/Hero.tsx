import { motion } from 'motion/react';
import { PERSONAL_DETAILS } from '../constants';

export default function Hero() {
  const words = PERSONAL_DETAILS.name.split(' ');

  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[30vw] font-black leading-none uppercase whitespace-nowrap">
          ANALYST
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-white/5 text-white/40">
            Available for 2025/26 Roles
          </div>
          <div className="h-px w-12 bg-white/10 hidden md:block" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 hidden md:inline truncate">
            Based in India
          </span>
        </motion.div>

        <h1 className="text-[12vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase flex flex-col">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 max-w-xl"
        >
          <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed italic border-l-2 border-white/20 pl-6">
            "{PERSONAL_DETAILS.title}"
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
