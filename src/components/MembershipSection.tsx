import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Basic Plan',
    price: '₹1,500',
    period: '/month',
    features: ['Access to gym floor', 'Locker facility', 'Basic cardio equipment', 'Open during all hours'],
    popular: false,
  },
  {
    name: 'Pro Plan',
    price: '₹2,500',
    period: '/month',
    features: ['Everything in Basic', 'Group training sessions', 'Diet consultation', 'Progress tracking', 'All equipment access'],
    popular: true,
  },
  {
    name: 'Personal Training',
    price: '₹5,000',
    period: '/month',
    features: ['Everything in Pro', 'Dedicated personal trainer', 'Custom workout plans', 'Nutrition planning', 'Weekly body assessments', 'Priority scheduling'],
    popular: false,
  },
];

const MembershipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' },
        y: 60, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="membership" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="red-accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Membership</span> Plans
          </h2>
          <p className="font-condensed text-lg text-muted-foreground tracking-wider">
            Invest in yourself today
          </p>
        </div>

        <div className="pricing-grid grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`pricing-card card-gym p-8 flex flex-col ${
                plan.popular ? 'border-primary relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded font-condensed text-xs tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground font-condensed">{plan.period}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn-glow text-center py-3 rounded font-condensed tracking-widest uppercase text-sm ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-foreground hover:border-primary hover:text-primary'
                } transition-all duration-300`}
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
