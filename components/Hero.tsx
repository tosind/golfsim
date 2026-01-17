
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Luxury Home Golf Simulator Installation" 
          className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4bVNKtKW3Z6GX7k-MUF-2O1kwT_UwL17kM4sXoLlkb8Kxi5XWF_abRSqpoqgEk6iWzrxkrChf7L6Ff-8r6MaLvcqxu0MO0beqSEoTW2osy-XGKFtZtF6WxbMhM-tswnDjZJ30mci-lgbOYBbuoTXlWpOEK8KWBs3ol1XcXEd0LqJl9MKs35aYTDCIDJhKWiLBXHipXFalWp6nDu5YO44T7uOuBsZyOZFWrwrzH2SSzyfTAcDWZP2Fon8fUr6lacTelooT_5QhUzW9"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-2xl space-y-8">
          <span className="inline-block text-accent font-semibold tracking-[0.4em] text-[10px] uppercase animate-pulse">
            Master the Green Anywhere
          </span>
          <h1 className="text-6xl md:text-8xl font-display leading-[1.1] text-white">
            The Ultimate <br/>Indoor Golf <br/><span className="text-accent italic">Experience</span>
          </h1>
          <p className="text-lg text-gray-300 font-light leading-relaxed max-w-lg">
            Custom-engineered home golf simulators that blend hyper-realistic performance with luxury interior design. Your club, your home, your rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#residential" 
              className="bg-primary text-white px-10 py-5 rounded font-bold tracking-[0.2em] text-xs text-center hover:bg-green-800 hover:shadow-lg hover:shadow-primary/20 transition-all uppercase"
            >
              View Solutions
            </a>
            <a 
              href="#gallery" 
              className="border border-white/30 text-white px-10 py-5 rounded font-bold tracking-[0.2em] text-xs text-center hover:bg-white hover:text-black transition-all uppercase backdrop-blur-sm"
            >
              Gallery
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-icons-outlined text-white/50 text-3xl">expand_more</span>
      </div>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
