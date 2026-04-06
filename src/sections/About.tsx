import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  if (!aboutConfig.title) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image fade in
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats stagger
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll('.stat-item');
        gsap.fromTo(
          stats,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
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
      id="story"
      className="relative py-24 md:py-32 bg-charcoal"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div ref={contentRef}>
            {/* Subtitle */}
            <span className="inline-block text-gold text-sm font-body tracking-[0.2em] uppercase mb-4">
              {aboutConfig.subtitle}
            </span>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
              {aboutConfig.title}{' '}
              <span className="italic text-gold/90">{aboutConfig.titleAccent}</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 mb-12">
              {aboutConfig.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base md:text-lg text-ivory/60 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-8 md:gap-12">
              {aboutConfig.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="font-serif text-3xl md:text-4xl text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-ivory/50 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/20 z-0" />
              
              <img
                src={aboutConfig.image}
                alt={aboutConfig.imageAlt}
                className="relative z-10 w-full h-auto object-cover"
                loading="lazy"
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40 z-20" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40 z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
