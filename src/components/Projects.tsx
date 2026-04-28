import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-6 md:left-20 z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter"
          >
            Works
          </motion.h2>
          <p className="text-white/30 uppercase tracking-[0.5em] text-xs mt-2">Horizontal Discovery</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative h-[450px] w-[350px] md:h-[500px] md:w-[450px] shrink-0"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-brand-gray border border-white/10 group-hover:border-white/30 transition-all duration-500">
                {/* Header Gradient */}
                <div className="h-2/5 bg-gradient-to-br from-indigo-900/40 to-brand-black p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
                   <div className="w-full h-full border border-white/10 rounded-xl flex items-center justify-center opacity-30 font-mono text-[10px] tracking-widest">
                     VISUALIZATION_DATA_NODE
                   </div>
                </div>
                
                {/* Content Overlay */}
                <div className="p-10 flex flex-col h-3/5">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                      Archive // {project.id}
                    </span>
                    <span className="text-[10px] font-mono bg-white text-black px-2 py-0.5 font-bold">SPARSH_JAIN</span>
                  </div>
                  
                  <p className="text-white/40 text-[10px] uppercase font-mono tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-3 mb-6 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto flex justify-between items-center group/link">
                    <span className="text-[10px] font-mono border-b border-white/20 uppercase tracking-widest group-hover/link:border-white transition-colors">
                      View Dashboard
                    </span>
                    <span className="text-xl group-hover/link:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
