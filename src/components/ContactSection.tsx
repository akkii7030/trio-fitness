import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock, Send, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  { day: 'Monday – Saturday', time: '5:00 AM – 12:00 AM' },
  { day: 'Sunday', time: '8:00 AM – 4:00 PM' },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-left', {
        scrollTrigger: { trigger: '.contact-left', start: 'top 80%' },
        x: -40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.contact-right', {
        scrollTrigger: { trigger: '.contact-right', start: 'top 80%' },
        x: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const details =
          payload?.details || payload?.error || 'Failed to submit form';
        throw new Error(details);
      }

      setStatusMessage('Message sent successfully. We will contact you soon.');
      setForm({ name: '', email: '', phone: '', goal: '', message: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Could not send your message. Please try again.';
      setStatusMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="red-accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-left space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  First Floor, LA Square, Sierra Tower,<br />
                  Above Domino's, Lokhandwala Township,<br />
                  Kandivali East, Mumbai – 400101
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Phone</h4>
                <a href="tel:07738380154" className="text-muted-foreground hover:text-primary transition-colors font-body">
                  077383 80154
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Email</h4>
                <a href="mailto:akkii77580@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-body">
                  akkii77580@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Timings</h4>
                <table className="text-sm text-muted-foreground font-body">
                  <tbody>
                    {schedule.map(s => (
                      <tr key={s.day}>
                        <td className="pr-6 py-1">{s.day}</td>
                        <td className="text-primary font-semibold">{s.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d72.85!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Trio Fitness Location"
              />
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-condensed text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="font-condensed text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="font-condensed text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label className="font-condensed text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Fitness Goal</label>
                <select
                  value={form.goal}
                  onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select your goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>General Fitness</option>
                  <option>Sports Performance</option>
                </select>
              </div>
              <div>
                <label className="font-condensed text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your fitness journey..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-glow bg-primary text-primary-foreground w-full py-4 rounded font-condensed tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage ? (
                <p className="text-sm text-muted-foreground font-body">{statusMessage}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
