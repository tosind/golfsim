
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResidentialSolutions from './components/ResidentialSolutions';
import CommercialInstallations from './components/CommercialInstallations';
import PrecisionEngineering from './components/PrecisionEngineering';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

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
        <button className="w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300">
          <span className="material-icons-outlined">chat</span>
        </button>
      </div>
    </div>
  );
};

export default App;
