
import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from '../../lib/gsap';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power4.inOut'
      });
      gsap.fromTo('.menu-link', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.8,
        ease: 'power4.inOut'
      });
    }
  }, [isOpen]);

  const handleLifestyleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    if (location.pathname === '/') {
      const el = document.getElementById('lifestyle-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/?scroll=lifestyle');
    }
  };

  const navItems: Array<{ label: string; path: string; onClick?: (e: React.MouseEvent) => void }> = [
    { label: 'The Vision', path: '/about' },
    { label: 'Developments', path: '/developments' },
    { label: 'Services', path: '/services' },
    // { label: 'Lifestyle', path: '#lifestyle', onClick: handleLifestyleClick },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div 
      ref={overlayRef}
      className={`fixed inset-0 z-[60] bg-[#1a1a1a] text-[#f5f5f0] flex flex-col justify-center px-10 md:px-24 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-end">
        <div ref={linksRef} className="flex flex-col space-y-4 md:space-y-8">
          {navItems.map((item, i) => (
            item.onClick ? (
              <button
                key={i}
                onClick={item.onClick}
                className="menu-link text-5xl md:text-8xl serif italic font-light hover:translate-x-4 transition-transform duration-500 block w-fit text-left"
              >
                {item.label}
              </button>
            ) : (
              <Link 
                key={i}
                to={item.path} 
                onClick={onClose}
                className="menu-link text-5xl md:text-8xl serif italic font-light hover:translate-x-4 transition-transform duration-500 block w-fit"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
        
        <div className="mt-12 md:mt-0 text-stone-400 space-y-4 font-light text-sm md:text-base tracking-widest uppercase">
          <p className="menu-link opacity-0">#1287, 6th Main, 6th Cross, BEML Layout, RR Nagar, Bengaluru 560098</p>
          <p className="menu-link opacity-0">Inquiries: 73496 15302</p>
          <p className="menu-link opacity-0">vikaskatariya3004@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;