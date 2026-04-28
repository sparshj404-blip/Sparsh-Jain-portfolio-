import { motion } from 'motion/react';
import { PERSONAL_DETAILS, SOCIALS } from '../constants';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
              Let's <br /> Talk.
            </h2>
            <p className="text-xl text-white/50 font-light mb-12 max-w-md">
              Currently open to roles in data analytics, visualization, and strategic business intelligence.
            </p>
            
            <div className="flex flex-col gap-6">
              <a 
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="group flex items-center gap-6 p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-1">Email Me</h4>
                  <p className="text-lg md:text-xl font-medium">{PERSONAL_DETAILS.email}</p>
                </div>
                <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="group flex items-center gap-6 p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-1">Call Me</h4>
                  <p className="text-lg md:text-xl font-medium">{PERSONAL_DETAILS.phone}</p>
                </div>
                <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="flex gap-6 mt-12">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl glass-card"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 font-bold">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-white outline-none transition-colors text-lg"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 font-bold">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-white outline-none transition-colors text-lg"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 font-bold">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Hi Sparsh, let's collaborate on..."
                  className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-white outline-none transition-colors text-lg resize-none"
                />
              </div>

              <button className="w-full p-6 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/90 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
        <span>© 2026 SPARSH JAIN</span>
        <div className="flex gap-8">
          <span>DESIGNED FOR PRECISION</span>
          <span>DATA DRIVEN</span>
        </div>
      </div>
    </section>
  );
}
