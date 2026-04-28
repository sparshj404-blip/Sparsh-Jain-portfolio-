import { motion } from 'motion/react';
import { PERSONAL_DETAILS } from '../constants';

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed top-8 left-0 w-full z-50 px-6 flex justify-center"
    >
      <div className="flex items-center gap-8 px-6 py-3 glass-card rounded-full border-white/5 backdrop-blur-2xl">
        <div className="flex items-center gap-3 pr-8 border-r border-white/10">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
            {PERSONAL_DETAILS.name}
          </span>
        </div>
        
        <div className="flex gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
