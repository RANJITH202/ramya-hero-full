import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!contactConfig.title) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-charcoal-light"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-light" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div ref={contentRef}>
            <span className="inline-block text-gold text-sm font-body tracking-[0.2em] uppercase mb-4">
              {contactConfig.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
              {contactConfig.title}{' '}
              <span className="italic text-gold/90">{contactConfig.titleAccent}</span>
            </h2>
            <p className="font-body text-base md:text-lg text-ivory/60 mb-12 max-w-md">
              {contactConfig.description}
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-body text-sm text-ivory/50 mb-1">Email</div>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="font-body text-ivory hover:text-gold transition-colors duration-300"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-body text-sm text-ivory/50 mb-1">Phone</div>
                  <a
                    href={`tel:${contactConfig.phone}`}
                    className="font-body text-ivory hover:text-gold transition-colors duration-300"
                  >
                    {contactConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-body text-sm text-ivory/50 mb-1">Location</div>
                  <span className="font-body text-ivory">{contactConfig.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-charcoal/50 border border-gold/10 p-8 md:p-12">
            <h3 className="font-serif text-2xl text-ivory mb-8">
              {contactConfig.formTitle}
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {contactConfig.formFields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block font-body text-sm text-ivory/70 mb-2"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={5}
                      className="w-full px-4 py-3 bg-charcoal border border-gold/20 text-ivory font-body text-sm placeholder:text-ivory/30 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                      required
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-charcoal border border-gold/20 text-ivory font-body text-sm placeholder:text-ivory/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-transparent border border-gold/50 text-ivory font-body text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-glow"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-charcoal">
                  {isSubmitted ? 'Message Sent!' : contactConfig.submitText}
                </span>
                <span className="absolute inset-0 bg-gold transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
