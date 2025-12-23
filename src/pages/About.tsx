
import React, { useEffect } from 'react';
import { gsap } from '../lib/gsap';

const About: React.FC = () => {
  useEffect(() => {
    gsap.from('.reveal-text', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="bg-[#f5f5f0] pt-40 pb-24 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h1 className="reveal-text text-stone-400 uppercase tracking-[0.4em] text-xs font-medium mb-8">The Vision</h1>
          <h2 className="reveal-text text-5xl md:text-9xl serif italic font-light leading-tight max-w-5xl">
            Redefining the boundaries of modern living.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-text aspect-[4/5] bg-stone-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1500" 
              alt="Architecture Detail" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="space-y-12">
            <p className="reveal-text text-2xl md:text-3xl serif leading-relaxed text-[#1a1a1a]">
              L’Horizon was born from a singular desire: to create spaces that breathe. We don’t just build houses; we curate experiences that align with the soul of the landscape.
            </p>
            <p className="reveal-text text-stone-600 font-light leading-relaxed max-w-lg">
              Our philosophy is rooted in architectural silence. In a world that is increasingly loud, we find luxury in the spaces between. We prioritize natural materials, light as a structural element, and the seamless integration of technology.
            </p>
            <div className="reveal-text w-24 h-[1px] bg-stone-400"></div>
          </div>
        </div>

        <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Quietness", desc: "Minimalist aesthetics that promote mental clarity and peace." },
            { title: "Longevity", desc: "Materials chosen for their ability to age beautifully over generations." },
            { title: "Integration", desc: "Architecture that respects and enhances its natural environment." }
          ].map((item, i) => (
            <div key={i} className="reveal-text space-y-4">
              <h3 className="text-3xl serif italic">{item.title}</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
