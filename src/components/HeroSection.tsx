import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Phone } from 'lucide-react';
import HeroScene from './HeroScene';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 2
      });
      gsap.from(subRef.current, {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 2.3
      });
      gsap.from(btnsRef.current, {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 2.6
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-[1]" />
      
      <HeroScene />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 ref={headingRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          Transform Your Body.
          <br />
          <span className="text-gradient-red">Strengthen Your Soul.</span>
        </h1>
        <p ref={subRef} className="font-condensed text-xl md:text-2xl text-muted-foreground tracking-wider max-w-2xl mx-auto mb-10">
          Premium Fitness Training in Kandivali East
        </p>
        <div ref={btnsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-glow bg-primary text-primary-foreground px-10 py-4 rounded font-condensed text-lg tracking-widest uppercase"
          >
            Join Now
          </a>
          <a
            href="tel:07738380154"
            className="flex items-center gap-2 border border-border text-foreground px-10 py-4 rounded font-condensed text-lg tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
        <a href="tel:07738380154" className="inline-block mt-6 font-condensed text-muted-foreground tracking-wider">
          📞 077383 80154
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
