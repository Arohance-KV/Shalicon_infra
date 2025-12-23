
import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 md:space-y-12">
          <h2 className="about-text text-stone-400 uppercase tracking-[0.3em] text-xs font-medium">
            Our Philosophy
          </h2>
          <p className="about-text text-3xl md:text-5xl serif leading-tight text-[#1a1a1a]">
            We believe that home is not merely a structure, but a sensory experience that defines how we interact with the world.
          </p>
          <div className="about-text w-24 h-[1px] bg-stone-300"></div>
          <p className="about-text text-lg text-stone-600 font-light leading-relaxed max-w-md">
           ShaliCon Infra LLP build trust & reliability by setting benchmarks for quality and commit ourselves for the higher good through our projects. With a team of collective experience of over three decades in the construction industry, we understand and execute projects with 'time' as the essence of each.
          </p>
        </div>

        <div ref={imageRef} className="aspect-[4/5] overflow-hidden bg-stone-200">
          <img 
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Interior Details"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
