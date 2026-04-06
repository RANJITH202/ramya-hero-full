import { useEffect } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Collection } from './sections/Collection';
import { Craft } from './sections/Craft';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { siteConfig } from './config';
import './App.css';

function App() {
  useEffect(() => {
    // Update document metadata
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-charcoal">
      {/* Hero Section */}
      <Hero />

      {/* About / Our Story Section */}
      <About />

      {/* Collection Section */}
      <Collection />

      {/* Craft Section */}
      <Craft />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
