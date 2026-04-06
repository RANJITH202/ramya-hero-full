import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { craftConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Craft() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  if (!craftConfig.title) return null;

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

      // Steps stagger animation
      if (stepsRef.current) {
        const steps = stepsRef.current.querySelectorAll('.craft-step');
        gsap.fromTo(
          steps,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
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
      id="craft"
      className="relative py-24 md:py-32 bg-charcoal"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="inline-block text-gold text-sm font-body tracking-[0.2em] uppercase mb-4">
            {craftConfig.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
            {craftConfig.title}{' '}
            <span className="italic text-gold/90">{craftConfig.titleAccent}</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {craftConfig.steps.map((step, index) => (
            <div
              key={index}
              className="craft-step relative group"
            >
              {/* Number */}
              <div className="font-serif text-6xl md:text-7xl text-gold/10 mb-4 group-hover:text-gold/20 transition-colors duration-500">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative -mt-12 pl-4">
                <div className="w-8 h-px bg-gold/40 mb-4" />
                <h3 className="font-serif text-xl md:text-2xl text-ivory mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-ivory/50 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except last) */}
              {index < craftConfig.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
