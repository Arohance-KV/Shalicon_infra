
import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      name: "Dineshji Porwad",
      location: "Vijaynagar, Bengaluru",
      text: "I can vouch for Mr Vikas Katariya's ability to turn around any project size because of this unmatched passion and integrity for work shown for our initial project. I recommend him to anyone looking for a honest, hardworking and happy-beginnings."
    },
    {
      name: "Hemanthji Rao",
      location: "Banshankari, Bengaluru",
      text: "It's been 3 years since Mr Vikas and his team built our dream home and even to this day, we get compliments for a beautiful home - and we are truly grateful to him and his team for creating a timeless home for us."
    },
    {
      name: "Madanji Porwad",
      location: "Mysuru, Karnataka",
      text: "We built a bhavan with the help of Mr Vikas and are pleased to say that his work was exemplary. Timely delivery and honesty in transacting were the traits that truly stood out for us. We recommend him for his wonderful work."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24 bg-[#f5f5f0] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 md:mb-32">
          <span className="testimonial-reveal block text-stone-400 uppercase tracking-[0.4em] text-[10px] font-medium mb-12">Voices</span>
          <h2 className="testimonial-reveal text-5xl md:text-8xl serif italic font-light tracking-tighter">
            What they say.
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-start">
          {data.map((item, idx) => (
            <div key={idx} className="testimonial-reveal space-y-12 flex flex-col">
              <div className="relative">
                <span className="absolute -top-8 -left-4 text-8xl serif italic text-stone-200 pointer-events-none opacity-50">“</span>
                <p className="text-xl md:text-2xl serif italic leading-relaxed text-stone-800 relative z-10">
                  {item.text}
                </p>
              </div>
              <div className="space-y-1 border-t border-stone-200 pt-8">
                <h4 className="text-sm tracking-widest uppercase font-medium">{item.name}</h4>
                <p className="text-stone-400 text-xs tracking-widest uppercase">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;