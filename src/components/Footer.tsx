import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/trio-fitness-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <img src={logo} alt="Trio Fitness" className="w-20 h-20 object-contain mb-4" />
            <p className="font-display text-xl tracking-wider mb-1">TRIO FITNESS</p>
            <p className="font-condensed text-sm text-muted-foreground tracking-widest">Heart, Body & Soul</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Our Plan', href: '#plans' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Membership Plans', href: '#membership' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a key={link.label} href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  First Floor, LA Square, Sierra Tower, Above Domino's, Lokhandwala Township, Kandivali East, Mumbai – 400101
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:07738380154" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">077383 80154</a>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-display text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/privacy-policy" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6" />
        <p className="text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Trio Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
