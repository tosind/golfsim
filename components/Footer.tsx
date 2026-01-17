
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-accent text-4xl">sports_golf</span>
              <span className="text-2xl font-display font-bold tracking-wider">
                ELITE<span className="text-accent">SIMS</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              The premier choice for luxury golf simulator design and installation. Delivering professional-grade experiences to discerning golfers globally.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/40 group-hover:bg-accent rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-bold text-[10px] tracking-[0.3em] uppercase text-accent mb-10">Quick Links</h6>
            <ul className="space-y-5 text-sm text-gray-400 font-light">
              {['Residential Gallery', 'Commercial Portfolios', 'Technology Specs', 'Maintenance Plans'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-[10px] tracking-[0.3em] uppercase text-accent mb-10">Contact</h6>
            <ul className="space-y-6 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-4">
                <span className="material-icons-outlined text-accent text-lg">location_on</span>
                <span>4580 Scottsdale Rd, <br/>Scottsdale, AZ 85251</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-icons-outlined text-accent text-lg">phone</span>
                <span>+1 (800) GOLF-SIM</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-icons-outlined text-accent text-lg">email</span>
                <span>hello@elitesims.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-[10px] tracking-[0.3em] uppercase text-accent mb-10">Newsletter</h6>
            <p className="text-xs text-gray-500 mb-6 font-light">Receive design inspiration, case studies, and technology updates.</p>
            <form className="flex group" onSubmit={e => e.preventDefault()}>
              <input 
                className="bg-white/5 border border-white/10 rounded-l px-5 py-3 text-sm w-full focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-gray-600" 
                placeholder="Your email" 
                type="email"
              />
              <button className="bg-primary hover:bg-green-800 px-6 py-3 rounded-r transition-all group-active:scale-95">
                <span className="material-icons-outlined text-lg">send</span>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase text-gray-600">
          <p>© 2024 Elite Golf Simulators. All rights reserved.</p>
          <div className="flex gap-12 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
