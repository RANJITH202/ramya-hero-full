import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collectionConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Collection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  if (!collectionConfig.title || collectionConfig.items.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.collection-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="relative py-24 md:py-32 bg-charcoal-light"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-light" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-body tracking-[0.2em] uppercase mb-4">
            {collectionConfig.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
            {collectionConfig.title}{' '}
            <span className="italic text-gold/90">{collectionConfig.titleAccent}</span>
          </h2>
          <p className="font-body text-base md:text-lg text-ivory/60 max-w-2xl mx-auto">
            {collectionConfig.description}
          </p>
        </div>

        {/* Collection Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {collectionConfig.items.map((item) => (
            <div
              key={item.id}
              className="collection-card group relative bg-charcoal/50 border border-gold/10 overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-glow"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold/20 backdrop-blur-sm text-gold text-xs font-body tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-ivory/50 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-gold">{item.price}</span>
                  <button className="group/btn flex items-center gap-2 text-ivory/70 text-sm font-body hover:text-gold transition-colors duration-300">
                    View Details
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={collectionConfig.ctaHref}
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-gold/50 text-ivory font-body text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-glow"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-charcoal">
              {collectionConfig.ctaText}
            </span>
            <svg
              className="relative z-10 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="absolute inset-0 bg-gold transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
