'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
});

const USP_TAGS = ['Off Sarjapur Road', '75,000 Sq. Ft. Clubhouse', '3 KM Nature Trail', 'Private Elevators', 'French Style Balconies'];

const STATS = [
  { value: '75,000', label: 'Sq. Ft. Clubhouse' },
  { value: '3 KM', label: 'Nature Trail' },
  { value: 'Private', label: 'Elevators' },
];

const HeroSection = () => (
  <section className="w-full bg-primary pt-[80px]" id="hero">
    <div className="flex flex-row h-[calc(100vh-80px)] min-h-[480px]">
      {/* Left: Image */}
      <div className="relative w-[50%] lg:w-[55%] overflow-hidden bg-primary/80">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
        <Image
            src="https://static.wixstatic.com/media/cef78c_31b95d1386124cf6bce83b261bc339bd~mv2.jpg"
            alt="Nambiar Ellegenza Purple Crest Villa"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Right: Content */}
      <div className="w-[50%] lg:w-[45%] flex flex-col justify-center px-4 md:px-12 lg:px-14 py-6 lg:py-16 gap-0 overflow-y-auto bg-primary">
        <motion.div {...fadeUp(0.2)} className="flex items-center justify-between mb-3 md:mb-5">
          <div className="flex items-center gap-2">
            <span className="font-paragraph text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-accent-gold">Nambiar Builders</span>
            <div className="w-px h-3 bg-accent-gold/30" />
            <span className="font-paragraph text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-primary-foreground font-semibold">Purple Crest</span>
          </div>
          <span className="hidden md:block font-paragraph text-[8px] tracking-[0.15em] uppercase text-primary-foreground/50">
            Nambiar Ellegenza Purple Crest
          </span>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="mb-1">
          <h1 className="font-heading text-[clamp(1.2rem,3.5vw,4rem)] leading-[1.05] tracking-tight text-accent-gold">
            Where Life Meets
          </h1>
          <h1 className="font-heading text-[clamp(1.2rem,3.5vw,4rem)] leading-[1.05] tracking-tight text-accent-gold">
            Luxury.
          </h1>
        </motion.div>

        <motion.div {...fadeUp(0.38)} className="mb-3 md:mb-5">
          <p className="font-paragraph text-[8px] md:text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60">
            Luxury Villa Community · Off Sarjapur Road
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 } as any}
          className="h-px w-10 md:w-16 bg-accent-gold mb-3 md:mb-5"
        />

        <motion.div {...fadeUp(0.5)} className="mb-2 md:mb-4">
          <p className="font-paragraph text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-primary-foreground font-semibold">
            Luxury Villas · Off Sarjapur Road
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.53)} className="mb-3 md:mb-5">
          <p className="font-paragraph text-[10px] md:text-xs text-primary-foreground/60 font-light leading-relaxed max-w-xs">
            Step into a world where every moment feels extraordinary. The Ellegenza Purple Crest Edition isn't just about living; it's about curating a lifestyle that embraces elegance, sophistication, and a deep connection to both nature and urban vibrancy.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.55)} className="flex items-center gap-1.5 mb-4 md:mb-6">
          <div className="w-3 md:w-5 h-px bg-accent-gold/50" />
          <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent-gold" />
          <span className="font-paragraph text-[9px] md:text-[11px] tracking-[0.15em] uppercase text-primary-foreground/60">
            Sarjapur Road, Bengaluru
          </span>
          <div className="w-3 md:w-5 h-px bg-accent-gold/50" />
        </motion.div>

        <motion.div {...fadeUp(0.62)} className="mb-4 md:mb-6">
          <button
            onClick={() => window.dispatchEvent(new Event('open-enquiry-popup'))}
            className="group flex items-center gap-2 bg-accent-gold px-4 md:px-7 py-2.5 md:py-3.5 font-paragraph text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-primary hover:bg-accent-gold-light transition-all duration-300"
          >
            Schedule a Visit
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-1.5 mb-4 md:mb-7">
          {USP_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-paragraph text-[7px] md:text-[9px] tracking-[0.15em] uppercase border border-accent-gold/40 text-accent-gold px-2 py-1 md:px-3 md:py-1.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.8)}>
          <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6 border-t border-primary-foreground/10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p
                  className="font-paragraph text-lg md:text-2xl text-accent-gold leading-none mb-0.5"
                  style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum"' }}
                >
                  {s.value}
                </p>
                <p className="font-paragraph text-[7px] md:text-[9px] tracking-[0.15em] uppercase text-primary-foreground/55 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
