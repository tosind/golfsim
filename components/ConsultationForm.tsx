
import React from 'react';

const ConsultationForm: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="consultation">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary/95 dark:bg-green-950/95 z-0"></div>
      <img 
        alt="Golf Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 grayscale" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdZd9EPZZdPblcTfELQgkKFNRNOuBJK16bvVNbyo5yVH7260STL0sNgC48mYKv-gNnre4cmQf_1Nk9YuFbMwWKvuJvsmAb7cweXy3Bj5TGROiFsOt4rJlc-bNFtRw-0gOhQ9U-UnepxxZB2iiVqvnJR-RO_1mqFsMK39GPdJyaCs8vpHRoqouKCMGNU_jG_qfJCgjJEIiPdQPh-YGtTyKgb4gvIRbGbgh_RVda2llutfdFBw1WePh7pPeTvfhCNbPr37f9ikacfRxM"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-500">
          <div className="md:w-[60%] p-12 lg:p-20">
            <h2 className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6">Start Your Project</h2>
            <h3 className="text-4xl md:text-5xl font-display dark:text-white mb-8">Request a Design Consultation</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg font-light leading-relaxed">
              Speak with our expert designers about your space and goals. We'll provide a 3D rendering and a detailed quote tailored to your needs.
            </p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Full Name</label>
                  <input 
                    className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none" 
                    placeholder="Enter your name" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Email Address</label>
                  <input 
                    className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none" 
                    placeholder="name@example.com" 
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Project Type</label>
                <select className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none appearance-none">
                  <option>Residential Project</option>
                  <option>Commercial Project</option>
                  <option>Equipment Only</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Message</label>
                <textarea 
                  className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none" 
                  placeholder="Tell us about your space (dimensions, goals...)" 
                  rows={4}
                ></textarea>
              </div>

              <button className="w-full bg-primary hover:bg-green-800 text-white font-bold tracking-[0.3em] py-5 rounded-lg transition-all uppercase shadow-lg shadow-primary/30 active:scale-[0.98]">
                Submit Request
              </button>
            </form>
          </div>

          <div className="md:w-[40%] bg-zinc-50 dark:bg-zinc-800/80 p-12 lg:p-20 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-200 dark:border-zinc-700 transition-colors duration-500">
            <div className="space-y-16">
              {[
                { icon: 'verified', title: 'Lifetime Support', desc: 'Ongoing remote updates and concierge maintenance.' },
                { icon: 'speed', title: 'Fast Installation', desc: 'From concept to first swing in as little as 4 weeks.' },
                { icon: 'brush', title: 'Custom Design', desc: 'Architect-led designs that complement your home\'s aesthetic.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="material-icons-outlined text-accent text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h5 className="font-display text-xl dark:text-white mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
