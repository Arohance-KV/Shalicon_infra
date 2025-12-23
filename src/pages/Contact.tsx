import React, { useEffect, useRef } from 'react';
import { gsap } from '@/src/lib/gsap';
import Button from '@/src/components/ui/Button';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#f5f5f0] pt-40 md:pt-64 pb-24 px-6 md:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-24 md:mb-48">
          <span className="contact-reveal block text-stone-400 uppercase tracking-[0.4em] text-[10px] font-medium mb-12">Connections</span>
          <h1 className="contact-reveal text-6xl md:text-[8vw] leading-[0.9] serif italic font-light tracking-tighter">
            Let's shape the <br />
            <span className="md:ml-[15vw]">future together.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4 space-y-16">
             <div className="contact-reveal">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-6 font-medium">Inquiries</h3>
                <p className="text-3xl serif italic hover:opacity-60 transition-opacity">hello@lhorizon.com</p>
                <p className="text-xl serif mt-2 font-light text-stone-500">+1 (800) HORIZON</p>
             </div>
             <div className="contact-reveal">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-6 font-medium">Headquarters</h3>
                <div className="space-y-8 text-xl serif italic font-light text-stone-700">
                  <p>98 Bond Street,<br/>Mayfair, London</p>
                  <p>12th Avenue, Penthouse B<br/>New York, NY</p>
                </div>
             </div>
             <div className="contact-reveal pt-12">
               <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase font-medium text-stone-400">
                  <a href="#" className="hover:text-stone-800 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-stone-800 transition-colors">LinkedIn</a>
               </div>
             </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 contact-reveal bg-white/40 p-10 md:p-20 backdrop-blur-sm border border-stone-200">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 border-b border-stone-200 focus-within:border-stone-800 transition-colors pb-2">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent py-2 outline-none serif text-2xl placeholder:text-stone-300" />
                </div>
                <div className="space-y-2 border-b border-stone-200 focus-within:border-stone-800 transition-colors pb-2">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Email Address</label>
                  <input type="email" placeholder="john@domain.com" className="w-full bg-transparent py-2 outline-none serif text-2xl placeholder:text-stone-300" />
                </div>
              </div>

              <div className="space-y-2 border-b border-stone-200 focus-within:border-stone-800 transition-colors pb-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Interest</label>
                <select className="w-full bg-transparent py-2 outline-none serif text-2xl appearance-none cursor-none">
                  <option>Private Acquisition</option>
                  <option>Development Partnership</option>
                  <option>Press & Media</option>
                  <option>Career Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 border-b border-stone-200 focus-within:border-stone-800 transition-colors pb-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Message</label>
                <textarea rows={1} className="w-full bg-transparent py-2 outline-none serif text-2xl resize-none placeholder:text-stone-300" placeholder="Tell us about your vision..."></textarea>
              </div>

              <div className="pt-8">
                <Button className="w-full group">
                  Send Inquiry
                  <span className="inline-block ml-4 transition-transform group-hover:translate-x-2">→</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
