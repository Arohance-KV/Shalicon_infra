
import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const Mantras: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro text reveal
      gsap.from('.mantra-intro', {
        scrollTrigger: {
          trigger: '.mantra-intro',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Individual mantra items reveal
      gsap.from('.mantra-item', {
        scrollTrigger: {
          trigger: '.mantras-list',
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const mantras = [
    { title: "Simple, Sincere Systems", desc: "Clarity in process leads to excellence in execution." },
    { title: "Socially Progressive", desc: "Building communities that foster growth and inclusivity." },
    { title: "Sustainable Spaces", desc: "Architecture that respects the planet and endures through time." },
    { title: "Support & Care", desc: "A commitment to service that extends far beyond the handover." },
    { title: "Soulful", desc: "Infusing every brick and beam with intention and character." }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24 bg-[#f5f5f0] text-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">
          <div className="lg:col-span-5">
            <span className="mantra-intro block text-stone-400 uppercase tracking-[0.4em] text-[10px] font-medium mb-12">Our Commitment</span>
            <h2 className="mantra-intro text-4xl md:text-7xl serif italic leading-[1.1] tracking-tighter">
              The Five S’s
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="mantra-intro text-xl md:text-2xl serif font-light text-stone-600 leading-relaxed italic">
              "While we've just taken off as a company, we've got our feet on the ground and are geared to take flight with every single project. These pillars are the basis of which we commit to deliver."
            </p>
          </div>
        </div>

        <div className="mantras-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {mantras.map((mantra, idx) => (
            <div key={idx} className="mantra-item group">
              <div className="flex items-baseline gap-6 mb-8">
                <span className="text-4xl md:text-5xl serif italic text-stone-300 group-hover:text-stone-800 transition-colors duration-500">
                  0{idx + 1}
                </span>
                <div className="h-[1px] flex-1 bg-stone-200 group-hover:bg-stone-800 transition-all duration-700 origin-left"></div>
              </div>
              <h3 className="text-2xl md:text-3xl serif mb-4">{mantra.title}</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed tracking-wide">
                {mantra.desc}
              </p>
            </div>
          ))}
          
          {/* Decorative element for the empty grid slot if applicable */}
          <div className="mantra-item hidden lg:flex items-center justify-center border border-dashed border-stone-200 aspect-square md:aspect-auto">
             <div className="text-center p-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-stone-300">Shalibhadra Group</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-stone-300 mt-2">Est. 2024</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mantras;