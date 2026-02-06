
import React from 'react';
import { MousePointer2, MessageSquare, Filter, Calendar, CheckCircle2 } from 'lucide-react';

const steps = [
  { 
    title: "Capture", 
    description: "Our AI picks up every new message from Instagram, WhatsApp, or Email instantly.",
    icon: <MousePointer2 className="w-6 h-6" />
  },
  { 
    title: "Respond", 
    description: "The agent replies with your brand's voice, answering questions in seconds.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  { 
    title: "Qualify", 
    description: "Smart filtering identifies high-value leads and collects their key info.",
    icon: <Filter className="w-6 h-6" />
  },
  { 
    title: "Book", 
    description: "Qualified prospects are automatically booked into your calendar for a call.",
    icon: <Calendar className="w-6 h-6" />
  },
  { 
    title: "Closing", 
    description: "You receive a summary of the lead so you can step in and close the deal.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Architecture</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">View Matrix</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:border-blue-600 group-hover:shadow-xl transition-all duration-300">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-4">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
