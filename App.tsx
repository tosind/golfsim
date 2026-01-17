
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ResidentialSolutions from './components/ResidentialSolutions.tsx';
import CommercialInstallations from './components/CommercialInstallations.tsx';
import PrecisionEngineering from './components/PrecisionEngineering.tsx';
import ConsultationForm from './components/ConsultationForm.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/30">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero />
        <ResidentialSolutions />
        <CommercialInstallations />
        <PrecisionEngineering />
        <ConsultationForm />
      </main>

      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300" aria-label="Open support chat">
          <span className="material-icons-outlined">chat</span>
        </button>
      </div>
    </div>
  );
};

export default App;
