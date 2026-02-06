
import React from 'react';
import { 
  Instagram, 
  MessageSquare, 
  Users, 
  Calendar, 
  DollarSign, 
  Headphones, 
  Bell, 
  Mail, 
  FileText 
} from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Instagram & WhatsApp AI",
    description: "Instant replies and lead capture directly on social platforms.",
    icon: <Instagram className="w-6 h-6 text-pink-500" />
  },
  {
    title: "Lead Qualification",
    description: "AI-driven HOT/WARM/COLD filtering to prioritize your sales focus.",
    icon: <Users className="w-6 h-6 text-blue-500" />
  },
  {
    title: "AI Booking Agents",
    description: "Automatic calendar scheduling without the back-and-forth emails.",
    icon: <Calendar className="w-6 h-6 text-green-500" />
  },
  {
    title: "Sales Automation",
    description: "Instant offer and pricing handling for every incoming enquiry.",
    icon: <DollarSign className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Customer Support AI",
    description: "24/7 FAQ handling and proactive support for your customers.",
    icon: <Headphones className="w-6 h-6 text-purple-500" />
  },
  {
    title: "CRM & Internal Alerts",
    description: "Auto-sync leads and instant alerts for your human team.",
    icon: <Bell className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Email Automation",
    description: "Intelligent follow-ups and personalized reminders that convert.",
    icon: <Mail className="w-6 h-6 text-sky-500" />
  },
  {
    title: "Content & Newsletter",
    description: "AI research and automated content delivery for your audience.",
    icon: <FileText className="w-6 h-6 text-amber-500" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950">Intelligent Solutions for Growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
