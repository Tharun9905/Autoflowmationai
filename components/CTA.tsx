
import React from 'react';
import { Mail, Headphones, Sparkles } from 'lucide-react';

interface CTAProps {
  onBookDemo: () => void;
}

const CTA: React.FC<CTAProps> = ({ onBookDemo }) => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3.5rem] p-6 md:p-24 text-center relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Accent lighting */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-yellow-400/5 rounded-full blur-[120px]" />
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-yellow-400 text-xs font-black uppercase tracking-[0.3em] mb-12 relative z-10">
            <span className="animate-pulse"><Sparkles className="w-4 h-4" /></span>
            <span>Join 500+ Automated Brands</span>
          </div>

          <h2 className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter relative z-10 brand-header">
            Automate Your <br />
            <span className="text-blue-500 italic">Masterpiece.</span>
          </h2>
          
          <p className="text-base md:text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
            The era of manual labor is ending. Build your custom AI ecosystem today and reclaim your focus for what truly matters.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-20 max-w-6xl mx-auto relative z-10 text-left">
            {/* Contact Email Card */}
            <a 
              href="mailto:autoflowmation.ai@gmail.com" 
              className="flex items-center gap-4 md:gap-8 p-5 md:p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group min-w-0"
            >
              <div className="flex-shrink-0 p-4 md:p-6 bg-blue-600 rounded-[1.5rem] md:rounded-[2rem] text-white transition-all group-hover:scale-105 shadow-xl shadow-blue-600/20">
                <Mail className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <p className="text-slate-500 text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black mb-1">Contact Email</p>
                <p className="text-white font-black text-[13px] sm:text-lg md:text-2xl whitespace-nowrap tracking-tight leading-none">
                  autoflowmation.ai@gmail.com
                </p>
              </div>
            </a>
            
            {/* Contact Number Card */}
            <div 
              className="flex items-center gap-4 md:gap-8 p-5 md:p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group min-w-0"
            >
              <div className="flex-shrink-0 p-4 md:p-6 bg-yellow-400 rounded-[1.5rem] md:rounded-[2rem] text-slate-900 transition-all group-hover:scale-105 shadow-xl shadow-yellow-400/20">
                <Headphones className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <p className="text-slate-500 text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black mb-1">Contact Number</p>
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <a href="tel:+919989208800" className="text-white font-black text-[15px] sm:text-lg md:text-2xl hover:text-yellow-400 transition-colors whitespace-nowrap leading-none block">
                    +91 9989208800
                  </a>
                  <a href="tel:+916281782036" className="text-white font-black text-[15px] sm:text-lg md:text-2xl hover:text-yellow-400 transition-colors whitespace-nowrap leading-none block">
                    +91 6281782036
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={onBookDemo}
            className="w-full sm:w-auto bg-yellow-400 text-slate-900 px-16 py-7 rounded-3xl font-black text-xl hover:bg-yellow-300 transition-all active:scale-95 relative z-10 shadow-3xl shadow-yellow-400/10"
          >
            Claim Your Free AI Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
