
import React from 'react';
import { ArrowRight, Sparkles, CheckCircle, Zap, Shield, Rocket } from 'lucide-react';

interface HeroProps {
  onStartDiscovery: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartDiscovery }) => {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-slate-900 text-yellow-400 px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-12 animate-fade-in shadow-xl shadow-yellow-400/10">
          <Zap className="w-3.5 h-3.5 fill-yellow-400" />
          <span>The Sovereign AI Agent Protocol</span>
        </div>
        
        <h1 className="text-5xl md:text-9xl font-black text-slate-950 leading-[0.85] mb-8 tracking-tighter">
          Transcend the <span className="text-blue-600 italic">Routine.</span> <br className="hidden md:block" />
          <span className="relative inline-block">
            Master Machines.
            <span className="absolute -bottom-4 left-0 right-0 h-4 bg-yellow-400/40 -rotate-1 -z-10 blur-sm"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-tight font-medium">
          Deploy autonomous systems that learn your brand identity, hunt high-ticket leads, and finalize bookings while you focus on the vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <button 
            onClick={onStartDiscovery}
            className="group bg-slate-950 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-600/20 flex items-center gap-4 active:scale-95 w-full sm:w-auto justify-center"
          >
            Initiate System Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-white text-slate-950 border-4 border-slate-100 px-12 py-6 rounded-[2rem] font-black text-xl hover:border-yellow-400 hover:shadow-lg transition-all active:scale-95 w-full sm:w-auto"
          >
            View Matrix
          </button>
        </div>

        {/* Premium Hero Visual - High-fidelity AI Tech Node Interface */}
        <div className="relative group max-w-7xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-transparent to-yellow-400 rounded-[4rem] blur-3xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden border-[12px] border-white shadow- premium bg-slate-950">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4628c9bb5?auto=format&fit=crop&w=2400&q=100" 
              alt="Elite AI Neural Interface and Automation Workspace" 
              className="w-full h-auto object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=2400&q=100";
              }}
            />
            
            {/* Real-time Tool Overlays */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col gap-4">
              <div className="bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 transform -rotate-1">
                <div className="p-3 bg-green-100 rounded-xl text-green-600"><CheckCircle className="w-6 h-6" /></div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</p>
                  <p className="text-base font-bold text-slate-900">Leads Qualified</p>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 transform rotate-1">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><Zap className="w-6 h-6" /></div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol</p>
                  <p className="text-base font-bold text-slate-900">Matrix Active</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
              <div className="bg-blue-600 text-white p-8 rounded-[3rem] shadow-2xl flex items-center gap-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className="text-4xl font-black">100%+</p>
                  <p className="text-[10px] font-black text-blue-100 uppercase tracking-[0.3em]">Growth Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
