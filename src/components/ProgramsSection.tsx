import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Flame, Zap, Activity, PersonStanding, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { icon: Dumbbell, title: 'Strength Training', desc: 'Build raw power with progressive overload and compound movements.' },
  { icon: Flame, title: 'Fat Loss Programs', desc: 'High-intensity programs designed to torch fat and boost metabolism.' },
  { icon: Zap, title: 'Muscle Building', desc: 'Hypertrophy-focused routines for maximum muscle growth.' },
  { icon: Activity, title: 'Functional Training', desc: 'Improve mobility, balance, and everyday performance.' },
  { icon: PersonStanding, title: 'Cardio Training', desc: 'State-of-the-art cardio machines and HIIT sessions.' },
  { icon: Target, title: 'Personal Training', desc: 'One-on-one coaching tailored to your specific goals.' },
];

const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.program-card', {
        scrollTrigger: { trigger: '.programs-grid', start: 'top 80%' },
        y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="plans" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="red-accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Plan</span>
          </h2>
          <p className="font-condensed text-lg text-muted-foreground tracking-wider">
            Choose your path to transformation
          </p>
        </div>

        <div className="programs-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="program-card card-gym p-8 group cursor-pointer">
              <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
