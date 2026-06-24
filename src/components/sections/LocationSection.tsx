'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Image } from '@/components/ui/image';

const DISTANCES = [
  { time: 'Tech Parks', places: ['Electronic City', 'Wipro SEZ', 'RGA Tech Park', 'Biocon', 'RMZ Ecospace', 'Infosys SEZ', 'Embassy Tech Village', 'Prestige Tech Park'] },
  { time: 'Schools', places: ['TISB', 'Oakridge International', 'Indus International', 'Inventure Academy', 'Greenwood High', 'Global Indian International', 'Azim Premji University', 'Bethany High', 'DPS East'] },
  { time: 'Hospitals', places: ['Narayana Health City', 'Columbia Asia', 'Kiran Mazumdar Cancer Center', 'Sparsh Hospital', 'Oxford Medical Care', 'Motherhood Hospital'] },
  { time: 'Lifestyle', places: ['Sarjapur Social', 'Bangalore Central', 'Forum Neighbourhood Mall', 'Big Brewski', 'The Fisherman\'s Wharf', 'Decathlon'] },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as any },
});

const LocationSection = () => (
  <section className="py-12 md:py-14 px-4 md:px-10 bg-background" id="location">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeUp(0)} className="mb-7">
        <p className="font-paragraph text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-1.5">
          Where We Are
        </p>
        <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.6rem)] text-primary">Your World, Perfectly Connected</h2>
        <p className="font-paragraph text-sm text-foreground/65 font-light leading-relaxed mt-3 max-w-2xl">
          Perfectly situated off Sarjapur Road, Nambiar Ellegenza Purple Crest combines the best of both worlds — ideally positioned at the heart of a bustling IT hub, surrounded by top international schools and key conveniences, yet offering a sanctuary of peace and privacy.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <motion.div
          {...fadeUp(0.1)}
          className="w-full rounded-2xl overflow-hidden border border-primary/10"
        >
          <Image
            src="https://static.wixstatic.com/media/cef78c_afe3e98a168045a99d1975e844fa5c7f~mv2.jpg"
            alt="Nambiar Ellegenza Purple Crest Location Map"
            className="w-full h-auto block"
          />
        </motion.div>

        <div className="flex flex-col gap-5">
          <motion.div {...fadeUp(0.15)} className="flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-accent-gold mt-0.5 shrink-0" />
            <div>
              <p className="font-paragraph text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                Address
              </p>
              <p className="font-paragraph text-sm text-foreground/70 font-light leading-relaxed">
                Off Sarjapur Road, Bengaluru — 560 103
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ originX: 0 } as any}
            className="h-px w-10 bg-accent-gold"
          />

          <div className="flex flex-col gap-0 border border-primary/10 rounded-xl overflow-hidden">
            {DISTANCES.map((row, i) => (
              <motion.div
                key={row.time}
                {...fadeUp(0.25 + i * 0.08)}
                className={`flex items-start gap-4 px-5 py-4 bg-bg-warm hover:bg-bg-section transition-colors duration-200
                  ${i < DISTANCES.length - 1 ? 'border-b border-primary/8' : ''}`}
              >
                <div className="flex items-center gap-1.5 shrink-0 w-28">
                  <MapPin className="w-3 h-3 text-accent-gold" />
                  <span className="font-paragraph text-[10px] tracking-[0.12em] uppercase text-accent-gold font-semibold">
                    {row.time}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {row.places.map((place, j) => (
                    <span key={place} className="flex items-center gap-2">
                      <span className="font-paragraph text-sm text-foreground/65 font-light">
                        {place}
                      </span>
                      {j < row.places.length - 1 && (
                        <span className="text-foreground/20 text-xs">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.5)}>
            <button
              onClick={() => window.dispatchEvent(new Event('open-enquiry-popup'))}
              className="group flex items-center gap-2.5 border border-primary/25 px-5 py-2.5 font-paragraph text-[11px] tracking-[0.18em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
            >
              Get Directions
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
