
import React from 'react';

const CommercialInstallations: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900 text-white relative overflow-hidden" id="commercial">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <span className="material-icons-outlined text-[40rem] text-accent -rotate-12 translate-x-1/2">grid_view</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6">Enterprise Grade</h2>
            <h3 className="text-5xl md:text-6xl font-display mb-10 leading-[1.1]">Commercial Installations</h3>
            <p className="text-gray-400 font-light mb-16 leading-relaxed text-lg">
              Transform your facility into a premier golf destination. We provide turn-key solutions for country clubs, luxury hotels, and sports bars using commercial-grade hardware designed for 24/7 operation.
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="group">
                <div className="text-5xl font-display text-accent mb-3 group-hover:translate-x-2 transition-transform">99.9%</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">Uptime Reliability</div>
              </div>
              <div className="group">
                <div className="text-5xl font-display text-accent mb-3 group-hover:translate-x-2 transition-transform">4K UHD</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">Crystal Graphics</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
              <img 
                alt="Commercial Golf Facility" 
                className="rounded-xl shadow-inner w-full h-auto object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH5yHlCQ3wySO4o2b1DOj9DVFPK4XPM3_jWKtSoJiiP0L4MhsrXpvp14251J8Ca8uQBSPyODGemR9iUQa-RMwSLSbwWnmpQ1CBqM2krFTcprQJc-4jpmigd9ZAjPpVsSD51KBOAV-d3k7zshC7SOW7jeD3tDcuhaqBmyHxzmmH1LYthgzMTyMDNvAwMzSfbBUv0UHtkiZPnu-z3K7HkJeplKAx_dQYp5JWbqD6vcuS94kdUcujw96r5jJ11zXjK6AFtByx1P-8Uvjs"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-lg -rotate-12 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialInstallations;
