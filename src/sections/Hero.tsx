import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroConfig } from '../config';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Return null if no config
  if (!heroConfig.headline && !heroConfig.heroImage) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Navigation fade in
      tl.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.1
      );

      // Headline animation - staggered word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
          0.2
        );
      }

      // Subheadline fade in
      tl.fromTo(
        subheadRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.5
      );

      // Description fade in
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.7
      );

      // CTA buttons fade in
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.9
      );

      // Image scale and fade in
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1 },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split headline into words for staggered animation
  const headlineWords = heroConfig.headline.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-charcoal"
      role="banner"
      aria-label="Ramya Creations Hero Section"
    >
      {/* Deep charcoal background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft spotlight glow in background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation */}
      <nav
        ref={navRef}
        className="absolute top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-8 flex items-center justify-between"
        style={{ opacity: 0 }}
      >
        <a 
          href="/" 
          className="text-ivory font-serif text-xl md:text-2xl tracking-wide hover:text-gold transition-colors duration-500"
          aria-label="Ramya Creations Home"
        >
          {heroConfig.brandName}
        </a>
        
        {heroConfig.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-10">
            {heroConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-ivory/70 text-sm font-body tracking-wide hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        )}

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-ivory p-2 hover:text-gold transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1600px] mx-auto">
            
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              {/* Headline */}
              <h1
                ref={headlineRef}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] tracking-tight mb-6"
              >
                {headlineWords.map((word, index) => (
                  <span key={index} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
              </h1>

              {/* Subheadline */}
              <p
                ref={subheadRef}
                className="font-serif italic text-xl md:text-2xl lg:text-3xl text-gold/90 mb-6"
                style={{ opacity: 0 }}
              >
                {heroConfig.subheadline}
              </p>

              {/* Description */}
              <p
                ref={descRef}
                className="font-body text-base md:text-lg text-ivory/60 leading-relaxed max-w-lg mb-10"
                style={{ opacity: 0 }}
              >
                {heroConfig.description}
              </p>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ opacity: 0 }}>
                {/* Primary CTA */}
                <a
                  href={heroConfig.ctaHref}
                  className="group relative px-8 py-4 bg-transparent border border-gold/50 text-ivory font-body text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-glow"
                  aria-label={heroConfig.ctaText}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-charcoal">
                    {heroConfig.ctaText}
                  </span>
                  <span className="absolute inset-0 bg-gold transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                </a>

                {/* Secondary CTA */}
                <a
                  href={heroConfig.secondaryCtaHref}
                  className="group px-8 py-4 text-ivory/70 font-body text-sm tracking-widest uppercase transition-all duration-300 hover:text-gold flex items-center gap-3"
                  aria-label={heroConfig.secondaryCtaText}
                >
                  {heroConfig.secondaryCtaText}
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                ref={imageRef}
                className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
                style={{ opacity: 0 }}
              >
                {/* Image container with subtle border */}
                <div className="relative overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />
                  
                  {/* Image */}
                  <img
                    src={heroConfig.heroImage}
                    alt={heroConfig.heroImageAlt}
                    className="w-full h-auto object-cover"
                    loading="eager"
                    width="600"
                    height="800"
                  />

                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
                  
                  {/* Side accent lines */}
                  <div className="absolute top-1/4 left-0 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
                  <div className="absolute bottom-1/4 right-0 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-gold/30" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-gold/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />

      {/* Scroll indicator - subtle */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-ivory/50 text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/50 to-transparent" />
      </div>
    </section>
  );
}
