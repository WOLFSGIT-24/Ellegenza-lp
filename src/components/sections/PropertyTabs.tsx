'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from '@/components/ui/image';

const VILLA_IMG = 'https://static.wixstatic.com/media/cef78c_ae02ba7584f94d1ea2ad30067c2b7a32~mv2.jpg';

const TABS = [
  {
    id: 'private-courtyard',
    label: 'Private Courtyard',
    tagline: 'Private Family Gathering Space',
    description:
      'A private courtyard offering an exclusive family gathering space with enhanced ventilation and natural light, creating a serene retreat within your villa.',
    image: 'https://static.wixstatic.com/media/cef78c_c803cf48b7b24395b47f79bec3071116~mv2.png',
    specs: [
      { value: 'Enhanced', label: 'Natural Ventilation' },
      { value: 'Private', label: 'Family Space' },
      { value: 'Natural', label: 'Light' },
      { value: 'Exclusive', label: 'Villa Feature' },
    ],
  },
  {
    id: 'master-bedroom',
    label: 'Master Bedroom',
    tagline: 'Luxury Comfort & Refinement',
    description:
      'A luxury master suite designed for absolute comfort and refinement, offering a private sanctuary within your villa with premium finishes throughout.',
    image: 'https://static.wixstatic.com/media/cef78c_d35d40157ba24ef49030d68591685181~mv2.png',
    specs: [
      { value: 'Luxury', label: 'Suite Design' },
      { value: 'Premium', label: 'Finishes' },
      { value: 'Private', label: 'Sanctuary' },
      { value: 'Refined', label: 'Comfort' },
    ],
  },
  {
    id: 'home-theatre',
    label: 'Home Theatre',
    tagline: 'Private Entertainment Experience',
    description:
      'A dedicated home theatre offering a private entertainment experience within your villa — perfect for family movie nights and immersive viewing.',
    image: 'https://static.wixstatic.com/media/cef78c_168f4e8a64e44b9fba2815a51f43e89c~mv2.png',
    specs: [
      { value: 'Private', label: 'Theatre Room' },
      { value: 'Immersive', label: 'Experience' },
      { value: 'Family', label: 'Entertainment' },
      { value: 'Exclusive', label: 'Feature' },
    ],
  },
  {
    id: 'living-room',
    label: 'Living Room',
    tagline: 'Ultra-Luxurious Spacious Interiors',
    description:
      'An ultra-luxurious living space with spacious interiors designed to impress, providing the perfect setting for family relaxation and entertaining guests.',
    image: 'https://static.wixstatic.com/media/cef78c_b3f49767d298472f90125b042da25cea~mv2.png',
    specs: [
      { value: 'Ultra', label: 'Luxurious' },
      { value: 'Spacious', label: 'Interiors' },
      { value: 'Premium', label: 'Design' },
      { value: 'Elegant', label: 'Spaces' },
    ],
  },
  {
    id: 'dining-room',
    label: 'Dining Room',
    tagline: 'Elegant Dining Experiences',
    description:
      'An elegant dining space crafted for unforgettable family experiences — a room where every meal becomes a celebration of togetherness and fine living.',
    image: 'https://static.wixstatic.com/media/cef78c_785a8f56a08047b388a085df4d9cfa4c~mv2.png',
    specs: [
      { value: 'Elegant', label: 'Design' },
      { value: 'Premium', label: 'Finishes' },
      { value: 'Family', label: 'Gatherings' },
      { value: 'Exclusive', label: 'Space' },
    ],
  },
  {
    id: 'upper-living',
    label: 'Upper Living Room',
    tagline: 'Additional Family Lounge',
    description:
      'An additional family lounge designed for comfort and elegance — a versatile upper-level retreat that provides extra living space for the whole family.',
    image: 'https://static.wixstatic.com/media/cef78c_60bbc855f9d74feda02510235f9c7155~mv2.png',
    specs: [
      { value: 'Upper', label: 'Level Lounge' },
      { value: 'Flexible', label: 'Family Space' },
      { value: 'Elegant', label: 'Comfort' },
      { value: 'Exclusive', label: 'Feature' },
    ],
  },
  {
    id: 'multipurpose',
    label: 'Multipurpose Room',
    tagline: 'Flexible Space for Every Need',
    description:
      'A flexible multipurpose room adaptable for work, recreation, or personal use — designed to evolve with your lifestyle and the changing needs of your family.',
    image: 'https://static.wixstatic.com/media/cef78c_c1390d0d4c5d4be3b52e4318050edf03~mv2.png',
    specs: [
      { value: 'Work', label: 'From Home' },
      { value: 'Recreation', label: 'Space' },
      { value: 'Flexible', label: 'Layout' },
      { value: 'Personal', label: 'Use' },
    ],
  },
  {
    id: 'prayer-room',
    label: 'Prayer Room',
    tagline: 'Dedicated Spiritual Sanctuary',
    description:
      'A dedicated spiritual space within the residence — a serene prayer room thoughtfully designed to provide peace, reflection, and a connection to the sacred.',
    image: 'https://static.wixstatic.com/media/cef78c_fe5fadf7fea04b288cebefcd0b8c4b8d~mv2.png',
    specs: [
      { value: 'Dedicated', label: 'Sacred Space' },
      { value: 'Serene', label: 'Atmosphere' },
      { value: 'Private', label: 'Retreat' },
      { value: 'Exclusive', label: 'Feature' },
    ],
  },
];

const ImageCard = ({ tab }: { tab: (typeof TABS)[0] }) => (
  <div className="relative w-full rounded-2xl overflow-hidden border border-primary/10 bg-bg-warm order-2 lg:order-1">
    <Image src={tab.image} alt={tab.label} className="w-full h-auto block" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full p-5 md:p-7 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-paragraph text-[10px] tracking-[0.25em] uppercase text-accent-gold mb-0.5">
          {tab.label}
        </p>
        <h3 className="font-heading text-xl md:text-2xl text-white leading-tight">{tab.tagline}</h3>
      </motion.div>
    </div>
  </div>
);

const PropertyTabs = () => {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-10 md:py-12 px-4 md:px-10 bg-bg-warm" id="property-tabs">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="font-paragraph text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-1.5">
            Inside Your Villa
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.6rem)] text-primary">
            Home Features
          </h2>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex rounded-full border border-primary/15 p-1 gap-1 bg-bg-warm">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`relative px-7 py-2 rounded-full font-paragraph text-[11px] tracking-[0.18em] uppercase transition-all duration-300 ${
                  active === i ? 'text-primary-foreground' : 'text-foreground/50 hover:text-foreground/80'
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch"
          >
            <div className="w-full lg:w-1/2">
              <ImageCard tab={tab} />
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col gap-4 lg:pt-2">
              <div>
                <p className="font-paragraph text-[10px] tracking-[0.25em] uppercase text-accent-gold mb-1.5">
                  {tab.label}
                </p>
                <h3 className="font-heading text-[clamp(1.4rem,2.8vw,2.2rem)] text-primary leading-[1.15]">
                  {tab.tagline}
                </h3>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 } as any}
                className="h-px w-10 bg-accent-gold"
              />

              <p className="font-paragraph text-sm text-foreground/65 font-light leading-relaxed">
                {tab.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 border border-primary/12 rounded-lg overflow-hidden">
                {tab.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center text-center px-3 py-4 gap-1
                      bg-bg-warm hover:bg-bg-section transition-colors duration-200
                      ${i === 0 ? 'border-r border-primary/12' : ''}
                      ${i === 1 ? 'sm:border-r border-primary/12' : ''}
                      ${i === 2 ? 'border-t border-primary/12 sm:border-t-0 border-r border-primary/12' : ''}
                      ${i === 3 ? 'border-t border-primary/12 sm:border-t-0' : ''}
                    `}
                  >
                    <span
                      className="font-paragraph text-sm text-primary font-semibold leading-snug"
                      style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum"' }}
                    >
                      {spec.value}
                    </span>
                    <span className="font-paragraph text-[9px] tracking-[0.1em] uppercase text-foreground/50 leading-tight">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.dispatchEvent(new Event('open-enquiry-popup'))}
                className="self-start group flex items-center gap-2.5 border border-primary/25 px-5 py-2.5 font-paragraph text-[11px] tracking-[0.18em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
              >
                Enquire About {tab.label}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertyTabs;
