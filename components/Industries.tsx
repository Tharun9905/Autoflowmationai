
import React from 'react';
import { 
  Home, 
  Dumbbell, 
  Scissors, 
  GraduationCap, 
  ShoppingBag, 
  Plane, 
  Star, 
  Briefcase, 
  Cpu, 
  Film, 
  HeartPulse 
} from 'lucide-react';
import { Industry } from '../types';

const industries: Industry[] = [
  { name: "Real Estate", icon: <Home className="w-5 h-5" /> },
  { name: "Fitness & Wellness", icon: <Dumbbell className="w-5 h-5" /> },
  { name: "Salons & Clinics", icon: <Scissors className="w-5 h-5" /> },
  { name: "Coaches & Creators", icon: <Star className="w-5 h-5" /> },
  { name: "E-Commerce", icon: <ShoppingBag className="w-5 h-5" /> },
  { name: "Travel & Hospitality", icon: <Plane className="w-5 h-5" /> },
  { name: "Influencers", icon: <Star className="w-5 h-5" /> },
  { name: "Agencies", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Startups & SaaS", icon: <Cpu className="w-5 h-5" /> },
  { name: "Media", icon: <Film className="w-5 h-5" /> },
  { name: "Education", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Healthcare", icon: <HeartPulse className="w-5 h-5" /> }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-blue-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4">Industries We Serve</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-16">Tailored for Your Vertical</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-yellow-400 group-hover:text-blue-950 transition-colors">
                {industry.icon}
              </div>
              <span className="font-semibold text-sm">{industry.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
          <span>• Reduce manual work</span>
          <span>• Increase conversions</span>
          <span>• Scale without hiring</span>
        </div>
      </div>
    </section>
  );
};

export default Industries;
