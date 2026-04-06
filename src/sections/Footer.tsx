import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Youtube, Facebook, Pin, Mail, Phone, MapPin } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Youtube,
  Facebook,
  Pin,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!footerConfig.brandName) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-charcoal pt-20 pb-8"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={contentRef} className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl text-ivory hover:text-gold transition-colors duration-300">
                {footerConfig.brandName}
              </span>
            </a>
            <p className="font-body text-sm text-ivory/50 mb-2">
              {footerConfig.tagline}
            </p>
            <p className="font-body text-sm text-ivory/40 leading-relaxed">
              {footerConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm text-gold tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerConfig.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-sm text-gold tracking-wider uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold/60 mt-0.5" />
                <a
                  href={`mailto:${footerConfig.contactInfo.email}`}
                  className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  {footerConfig.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold/60 mt-0.5" />
                <a
                  href={`tel:${footerConfig.contactInfo.phone}`}
                  className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  {footerConfig.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5" />
                <span className="font-body text-sm text-ivory/60">
                  {footerConfig.contactInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-body text-sm text-gold tracking-wider uppercase mb-6">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {footerConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center border border-gold/20 text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
            <p className="font-body text-xs text-ivory/40 mt-4">
              Follow our journey for new collections and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/40">
            {footerConfig.copyright}
          </p>
          <div className="flex items-center gap-6">
            {footerConfig.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
