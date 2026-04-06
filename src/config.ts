// Site Configuration for Ramya Creations
// Premium handmade silk thread jewelry brand

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Ramya Creations | Handmade Silk Thread Jewelry",
  siteDescription: "Discover Ramya Creations' artisanal silk-thread jewelry. Handcrafted bangles, earrings, and necklaces blending Indian tradition with modern elegance.",
};

// Hero Section
export interface HeroConfig {
  brandName: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  heroImage: string;
  heroImageAlt: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  brandName: "Ramya Creations",
  headline: "Handcrafted Silk-Thread Jewelry",
  subheadline: "Where Tradition Meets Modern Grace",
  description: "Each piece is lovingly handmade, weaving together centuries of Indian craftsmanship with contemporary design. Lightweight, vibrant, and uniquely yours.",
  ctaText: "Explore Collection",
  ctaHref: "#collection",
  secondaryCtaText: "View Craft",
  secondaryCtaHref: "#craft",
  heroImage: import.meta.env.BASE_URL + "hero-jewelry.jpg",
  heroImageAlt: "Ramya Creations handmade silk-thread bangles and earrings in rose pink and gold",
  navLinks: [
    { label: "Collection", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "Craft", href: "#craft" },
    { label: "Contact", href: "#contact" },
  ],
};

// About / Our Story Section
export interface AboutConfig {
  subtitle: string;
  title: string;
  titleAccent: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
  image: string;
  imageAlt: string;
}

export const aboutConfig: AboutConfig = {
  subtitle: "Our Story",
  title: "A Legacy of",
  titleAccent: "Handcrafted Beauty",
  paragraphs: [
    "Ramya Creations was born from a deep love for traditional Indian artistry. What started as a humble passion for silk-thread jewelry has blossomed into a celebration of craftsmanship that honors our heritage while embracing modern elegance.",
    "Each piece in our collection is meticulously handcrafted by skilled artisans who have inherited techniques passed down through generations. We believe that jewelry should tell a story — your story."
  ],
  stats: [
    { value: "500+", label: "Happy Customers" },
    { value: "1000+", label: "Pieces Crafted" },
    { value: "5+", label: "Years of Excellence" },
  ],
  image: import.meta.env.BASE_URL + "silk_crafting.png",
  imageAlt: "Artisan crafting silk thread jewelry",
};

// Collection Section
export interface CollectionItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface CollectionConfig {
  subtitle: string;
  title: string;
  titleAccent: string;
  description: string;
  items: CollectionItem[];
  ctaText: string;
  ctaHref: string;
}

export const collectionConfig: CollectionConfig = {
  subtitle: "Our Collection",
  title: "Exquisite",
  titleAccent: "Creations",
  description: "Discover our curated selection of silk-thread jewelry, each piece designed to add a touch of elegance to your everyday moments.",
  items: [
    {
      id: 1,
      name: "Rose Gold Bangles",
      description: "Delicate silk-thread bangles with gold beadwork",
      price: "₹1,299",
      image: import.meta.env.BASE_URL + "silk_bangles.png",
      category: "Bangles",
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      description: "Elegant earrings with pearl accents",
      price: "₹899",
      image: import.meta.env.BASE_URL + "silk_earrings.png",
      category: "Earrings",
    },
    {
      id: 3,
      name: "Bridal Set",
      description: "Complete jewelry set for special occasions",
      price: "₹3,499",
      image: import.meta.env.BASE_URL + "silk_necklace.png",
      category: "Sets",
    },
  ],
  ctaText: "View All Products",
  ctaHref: "#shop",
};

// Craft Section
export interface CraftConfig {
  subtitle: string;
  title: string;
  titleAccent: string;
  steps: { number: string; title: string; description: string }[];
}

export const craftConfig: CraftConfig = {
  subtitle: "The Craft",
  title: "Made with",
  titleAccent: "Love & Precision",
  steps: [
    {
      number: "01",
      title: "Selection",
      description: "We source the finest silk threads and quality materials to ensure each piece meets our high standards.",
    },
    {
      number: "02",
      title: "Design",
      description: "Every design is thoughtfully created, blending traditional motifs with contemporary aesthetics.",
    },
    {
      number: "03",
      title: "Crafting",
      description: "Our skilled artisans hand-weave each piece with meticulous attention to detail and precision.",
    },
    {
      number: "04",
      title: "Finishing",
      description: "Each piece undergoes quality checks and is finished with care before reaching you.",
    },
  ],
};

// Contact Section
export interface ContactConfig {
  subtitle: string;
  title: string;
  titleAccent: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  formTitle: string;
  formFields: { name: string; label: string; type: string; placeholder: string }[];
  submitText: string;
}

export const contactConfig: ContactConfig = {
  subtitle: "Get in Touch",
  title: "Let's",
  titleAccent: "Connect",
  description: "Have a question or custom order in mind? We'd love to hear from you. Reach out and we'll get back to you soon.",
  email: "hello@ramyacreations.com",
  phone: "+91 98765 43210",
  address: "Bangalore, India",
  formTitle: "Send us a message",
  formFields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us what you're looking for..." },
  ],
  submitText: "Send Message",
};

// Footer Section
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  quickLinks: { label: string; href: string }[];
  contactInfo: { email: string; phone: string; address: string };
  copyright: string;
  bottomLinks: { label: string; href: string }[];
}

export const footerConfig: FooterConfig = {
  brandName: "Ramya Creations",
  tagline: "Handcrafted with love",
  description: "Premium handmade silk-thread jewelry that blends tradition with modern elegance.",
  socialLinks: [
    { name: "Instagram", href: "https://instagram.com/ramyacreations", icon: "Instagram" },
    { name: "YouTube", href: "https://youtube.com/ramyacreations", icon: "Youtube" },
    { name: "Facebook", href: "https://facebook.com/ramyacreations", icon: "Facebook" },
    { name: "Pinterest", href: "https://pinterest.com/ramyacreations", icon: "Pin" },
  ],
  quickLinks: [
    { label: "Home", href: "#" },
    { label: "Collection", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "The Craft", href: "#craft" },
    { label: "Contact", href: "#contact" },
  ],
  contactInfo: {
    email: "hello@ramyacreations.com",
    phone: "+91 98765 43210",
    address: "Bangalore, India",
  },
  copyright: "© 2024 Ramya Creations. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

// Intro Grid Section - Disabled
export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: { src: string; alt: string }[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "",
  titleLine2: "",
  description: "",
  portfolioImages: [],
  accentText: "",
};

// Featured Projects Section - Disabled
export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: { id: number; title: string; category: string; year: string; image: string; description: string }[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "",
  titleRegular: "",
  titleItalic: "",
  viewAllText: "",
  viewAllHref: "",
  viewProjectText: "",
  projects: [],
};

// Services Section - Disabled
export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: { iconName: string; title: string; description: string }[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "",
  titleLine1: "",
  titleLine2Italic: "",
  description: "",
  services: [],
};

// Why Choose Me Section - Disabled
export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: { value: number; suffix: string; label: string }[];
  featureCards: { image: string; imageAlt: string; title: string; description: string }[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "",
  titleRegular: "",
  titleItalic: "",
  statsLabel: "",
  stats: [],
  featureCards: [],
  wideImage: "",
  wideImageAlt: "",
  wideTitle: "",
  wideDescription: "",
};

// Testimonials Section - Disabled
export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: { id: number; name: string; role: string; image: string; quote: string }[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "",
  titleRegular: "",
  titleItalic: "",
  testimonials: [],
};

// FAQ Section - Disabled
export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: { id: string; question: string; answer: string }[];
}

export const faqConfig: FAQConfig = {
  subtitle: "",
  titleRegular: "",
  titleItalic: "",
  ctaText: "",
  ctaButtonText: "",
  ctaHref: "",
  faqs: [],
};
