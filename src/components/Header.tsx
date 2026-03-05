import { useState, useEffect } from 'react';
import Image from "next/image";
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/trio-fitness-logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Plan', href: '#plans' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Membership Plans', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <Image src={logo} alt="Trio Fitness" className="w-12 h-12 object-contain" />
            <div className="hidden sm:block">
              <span className="font-display text-xl tracking-wider text-foreground">TRIO FITNESS</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-condensed text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:07738380154"
              className="hidden md:flex items-center gap-2 text-sm font-condensed text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              077383 80154
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-glow bg-primary text-primary-foreground px-6 py-2.5 rounded font-condensed text-sm tracking-widest uppercase"
            >
              Join Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-condensed text-lg tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-glow bg-primary text-primary-foreground px-6 py-3 rounded font-condensed tracking-widest uppercase text-center mt-4"
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
