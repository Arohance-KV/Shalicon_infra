
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from '../../lib/gsap';

interface NavbarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle, isMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to('.navbar-container', {
      y: isVisible ? 0 : -100,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, [isVisible]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[120] mix-blend-difference navbar-container px-6 py-8 md:px-12 md:py-10 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl md:text-3xl tracking-tighter serif font-medium z-10">
        SHALICON
      </Link>
      <div className="hidden md:flex items-center gap-12 text-white/70 text-[10px] tracking-[0.3em] uppercase font-light">
        <Link to="/about" className="hover:text-white transition-colors">Vision</Link>
        <Link to="/developments" className="hover:text-white transition-colors">Portfolio</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
      
      <button 
        onClick={onMenuToggle}
        className="group flex flex-col items-end gap-1.5 focus:outline-none z-10"
        aria-label="Toggle Menu"
      >
        <span className={`h-[1px] bg-white transition-all duration-500 ease-expo ${isMenuOpen ? 'w-8 -rotate-45 translate-y-[3.5px]' : 'w-8'}`}></span>
        <span className={`h-[1px] bg-white transition-all duration-500 ease-expo ${isMenuOpen ? 'w-8 rotate-45 -translate-y-[3.5px]' : 'w-5 group-hover:w-8'}`}></span>
      </button>
    </nav>
  );
};

export default Navbar;