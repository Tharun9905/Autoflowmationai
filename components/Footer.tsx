
import React from 'react';
import { Bot, Twitter, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Unified Desktop Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="lg:max-w-xs xl:max-w-sm shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-950 p-2.5 rounded-2xl text-yellow-400 shadow-lg">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-slate-950 tracking-tighter">
                AutoFlowmation<span className="text-blue-600">AI</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-base font-medium mb-10">
              Leading the revolution in autonomous business operations. We build the brains behind your business growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-950 hover:text-yellow-400 transition-all text-slate-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-950 hover:text-yellow-400 transition-all text-slate-400"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-950 hover:text-yellow-400 transition-all text-slate-400"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Navigation Columns - One Row */}
          <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            <div>
              <h5 className="font-black text-slate-950 mb-6 uppercase tracking-widest text-[10px]">Company</h5>
              <ul className="space-y-4 text-slate-500 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">Our Lab <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">Careers <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Press Hub</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-slate-950 mb-6 uppercase tracking-widest text-[10px]">Ecosystem</h5>
              <ul className="space-y-4 text-slate-500 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-600 transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-slate-950 mb-6 uppercase tracking-widest text-[10px]">Support</h5>
              <ul className="space-y-4 text-slate-500 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Status</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="font-black text-slate-950 mb-6 uppercase tracking-widest text-[10px]">Contact</h5>
              <p className="text-slate-500 text-xs font-bold leading-relaxed">
                Hyderabad, India <br />
                Experts are available 24/7.
              </p>
              <a href="mailto:autoflowmation.ai@gmail.com" className="mt-4 block text-blue-600 font-bold text-sm hover:underline underline-offset-4">
                autoflowmation.ai@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
          <p>© 2024 AutoFlowmation AI. Future Secured.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;