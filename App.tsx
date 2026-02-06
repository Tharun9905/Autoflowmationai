
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RequirementsForm from './components/RequirementsForm';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'discovery'>('home');

  const navigateToDiscovery = () => {
    setView('discovery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onGetStarted={navigateToDiscovery} onHome={navigateToHome} />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero onStartDiscovery={navigateToDiscovery} />
            <Features />
            <Industries />
            <HowItWorks />
            <CTA onBookDemo={navigateToDiscovery} />
          </>
        ) : (
          <RequirementsForm onBack={navigateToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
