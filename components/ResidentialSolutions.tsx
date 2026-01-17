
import React from 'react';
import { RESIDENTIAL_SOLUTIONS } from '../constants.tsx';

const ResidentialSolutions: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500" id="residential">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6">Personal Sanctuaries</h2>
            <h3 className="text-5xl md:text-6xl font-display dark:text-white">Residential Solutions</h3>
          </div>
          <p className="max-w-md text-gray-500 dark:text-gray-400 font-light text-lg leading-relaxed">
            From basement conversions to custom outdoor buildings, we design and install the world's most immersive home golf environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {RESIDENTIAL_SOLUTIONS.map((solution) => (
            <div key={solution.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-8 shadow-2xl">
                <img 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  src={solution.imageUrl}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase">
                    Learn More
                  </button>
                </div>
              </div>
              <h4 className="text-2xl font-display dark:text-white mb-3 group-hover:text-accent transition-colors">
                {solution.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialSolutions;
