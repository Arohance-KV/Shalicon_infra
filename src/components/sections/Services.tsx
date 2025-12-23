
import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24 bg-[#1a1a1a] text-[#f5f5f0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Main Services Column */}
          <div className="lg:col-span-7 space-y-24">
            <div>
              <span className="service-reveal block text-stone-500 uppercase tracking-[0.4em] text-[10px] font-medium mb-12">What We Do</span>
              <h2 className="service-reveal text-5xl md:text-8xl serif italic font-light leading-[0.9] tracking-tighter mb-16">
                Residential &<br />Commercial.
              </h2>
              <div className="service-reveal grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-800 pt-12">
                <div className="space-y-4">
                  <h4 className="text-xl serif italic">Labor Supply & Interior Contracting</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">Scaling execution with precision and high-quality craftsmanship for complex interiors.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl serif italic">Residential Layout</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">Curating spatial flow that aligns with contemporary living standards and architectural integrity.</p>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-xl serif italic">Peb Structures</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">Engineered efficiency meeting aesthetic excellence in Pre-Engineered Building solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership / Asks & Gives Column */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="bg-stone-900/50 p-12 border border-stone-800 h-full flex flex-col justify-between">
              <div className="space-y-16">
                <div>
                  <h3 className="service-reveal text-stone-500 uppercase tracking-[0.3em] text-[10px] mb-8">The Collaboration</h3>
                  <div className="flex justify-between items-end border-b border-stone-800 pb-4 mb-8">
                    <span className="service-reveal text-2xl serif italic">Asks</span>
                    <span className="service-reveal text-2xl serif italic">Gives</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm font-light tracking-wide">
                    <div className="service-reveal space-y-4">
                      <p className="text-[#f5f5f0]">Architects</p>
                      <p className="text-[#f5f5f0]">Land Owners</p>
                    </div>
                    <div className="service-reveal space-y-4 text-stone-400">
                      <p>Architects</p>
                      <p>Material Vendors</p>
                      <p>Interior Contractors</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="service-reveal pt-24">
                <p className="text-stone-500 text-[10px] leading-relaxed uppercase tracking-widest">
                  We bridge the gap between architectural vision and material reality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;