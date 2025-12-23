
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#f5f5f0] pt-24 md:pt-48 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-24 md:mb-48 space-y-16 md:space-y-0">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-8xl serif italic font-light">Join the Circle.</h2>
          <p className="text-stone-400 font-light max-w-sm leading-relaxed">
            Subscribe to receive exclusive previews of upcoming architectural masterpieces.
          </p>
          <div className="flex w-full max-w-md border-b border-stone-700 pb-2 group focus-within:border-stone-400 transition-colors">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none outline-none text-xs tracking-widest flex-1 uppercase py-2 placeholder:text-stone-600"
            />
            <button className="text-xs tracking-widest uppercase text-stone-400 hover:text-white transition-colors">Submit</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-6">
            <h4 className="text-stone-500 text-[10px] tracking-[0.3em] uppercase">Connect</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-stone-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">Vimeo</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-stone-500 text-[10px] tracking-[0.3em] uppercase">Explore</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/about" className="hover:text-stone-400 transition-colors">Vision</Link></li>
              <li><Link to="/developments" className="hover:text-stone-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-stone-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-800 text-[10px] tracking-[0.2em] text-stone-500 uppercase font-medium">
        <p>&copy; 2024 SHALICON ESTATES. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
