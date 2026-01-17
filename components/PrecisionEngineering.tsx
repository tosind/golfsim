
import React from 'react';
import { FEATURES } from '../constants.tsx';

const PrecisionEngineering: React.FC = () => {
  return (
    <section className="py-32 bg-background-light dark:bg-zinc-950 transition-colors duration-500" id="technology">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6">The Innovation</h2>
          <h3 className="text-5xl md:text-6xl font-display dark:text-white">Precision Engineering</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border border-primary/10">
                <span className="material-icons-outlined text-3xl transition-colors duration-500 group-hover:text-white text-primary">
                  {feature.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-4 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrecisionEngineering;
