import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Users, Clock, ClipboardList } from 'lucide-react';
import trainerImg from '@/assets/trainer-session.jpg';
import gymInterior from '@/assets/gym-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Dumbbell, text: 'Advanced Equipment' },
  { icon: Users, text: 'Certified Trainers' },
  { icon: Clock, text: 'Flexible Timings' },
  { icon: ClipboardList, text: 'Personalized Plans' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
        x: -60, opacity: 0, duration: 1, ease: 'power3.out',
      });
      gsap.from('.about-image', {
        scrollTrigger: { trigger: '.about-image', start: 'top 80%' },
        x: 60, opacity: 0, duration: 1, ease: 'power3.out',
      });
      gsap.from('.highlight-item', {
        scrollTrigger: { trigger: '.highlight-item', start: 'top 85%' },
        y: 30, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-text">
            <div className="red-accent-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Trio Fitness</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              A high-energy fitness center located in Lokhandwala Township, Kandivali East — 
              focused on complete transformation. We believe in training your heart, body & soul 
              with the perfect blend of advanced equipment, expert guidance, and an electric atmosphere.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="highlight-item flex items-center gap-3 p-4 card-gym rounded-lg">
                  <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-condensed text-sm tracking-wider uppercase">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image relative">
            <img src={trainerImg} alt="Personal Training at Trio Fitness" className="rounded-lg w-full object-cover aspect-square" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden border-4 border-primary hidden lg:block">
              <img src={gymInterior} alt="Trio Fitness Interior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
