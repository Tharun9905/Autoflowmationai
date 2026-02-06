
import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted, onHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAction = (fn: () => void) => {
    fn();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onHome}>
          <div className="bg-slate-900 p-2.5 rounded-2xl transition-all group-hover:bg-blue-600">
            <Bot className="w-6 h-6 text-yellow-400" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            AutoFlowmation<span className="text-blue-600">AI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-bold text-[10px] uppercase tracking-[0.3em] text-slate-500">
          <a href="#features" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); onHome(); setTimeout(() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'}), 100); }}>Solutions</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors" onClick={(e) => { e.preventDefault(); onHome(); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'}), 100); }}>View Matrix</a>
          <button 
            onClick={onGetStarted}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-all shadow-lg active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-8 absolute top-full left-0 right-0 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4">
          <button className="text-left font-bold text-slate-900 text-lg" onClick={() => handleAction(onHome)}>Home</button>
          <button className="text-left font-bold text-slate-900 text-lg" onClick={() => { handleAction(onHome); setTimeout(() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'}), 100); }}>Solutions</button>
          <button className="bg-slate-900 text-white px-6 py-4 rounded-xl text-center font-bold" onClick={() => handleAction(onGetStarted)}>
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
