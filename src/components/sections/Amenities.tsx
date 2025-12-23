
import React, { useEffect } from 'react';
import { gsap } from '../../lib/gsap';

const Amenities: React.FC = () => {
  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.amenity-item', {
      scrollTrigger: {
        trigger: '.amenities-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  });

  return () => ctx.revert();
}, []);


  return (
    <section id="lifestyle-section" className="py-24 md:py-48 px-6 md:px-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32 text-center md:text-left">
          <h2 className="text-stone-400 uppercase tracking-[0.3em] text-xs font-medium mb-6">Lifestyle Curated</h2>
          <h3 className="text-4xl md:text-7xl serif font-light max-w-3xl leading-tight">Living is an art form. We provide the canvas.</h3>
        </div>

        <div className="amenities-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          <div className="amenity-item space-y-8">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="Spa" />
            </div>
            <h4 className="text-2xl serif">Wellness & Restoration</h4>
            <p className="text-stone-500 font-light leading-relaxed">Private spa suites and meditation gardens designed to harmonize mind and body in total seclusion.</p>
          </div>

          <div className="amenity-item space-y-8 md:mt-24">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="Wine Cellar" />
            </div>
            <h4 className="text-2xl serif">The Collector's Vault</h4>
            <p className="text-stone-500 font-light leading-relaxed">State-of-the-art temperature controlled galleries for your most precious vintages and art collections.</p>
          </div>

          <div className="amenity-item space-y-8 md:mt-48">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="Concierge" />
            </div>
            <h4 className="text-2xl serif">Bespoke Concierge</h4>
            <p className="text-stone-500 font-light leading-relaxed">Invisible, impeccable service tailored to your lifestyle, from private jet charters to world-class gastronomy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
