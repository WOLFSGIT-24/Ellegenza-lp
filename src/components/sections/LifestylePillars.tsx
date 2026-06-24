'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Home, Recycle, Zap, Users } from 'lucide-react';

const PILLARS = [
  {
    id: 1,
    name: 'French Balconies',
    desc: 'French Balconies That Redefine Sophistication — flood rooms with natural light and fresh air while enjoying panoramic views.',
    icon: Leaf,
    accent: 'Light · Air · Views',
  },
  {
    id: 2,
    name: 'Skylight Living',
    desc: 'Skylights invite the beauty of the sky into your home and create an atmosphere of warmth and tranquillity.',
    icon: Home,
    accent: 'Sky · Warmth · Tranquillity',
  },
  {
    id: 3,
    name: 'Private Elevators',
    desc: 'Seamless mobility and luxury with provision for private lifts in every residence.',
    icon: Zap,
    accent: 'Privacy · Mobility · Luxury',
  },
  {
    id: 4,
    name: 'Split Parking',
    desc: 'Twin parking layout designed for convenience and functionality.',
    icon: Recycle,
    accent: 'Convenience · Functionality · Design',
  },
  {
    id: 5,
    name: 'Community Living',
    desc: 'Over 350 families in 100 acres of exclusive villa community designed for elevated, vibrant living.',
    icon: Users,
    accent: 'Community · Exclusivity · Lifestyle',
  },
];

const LifestylePillars = () => {
  const [active, setActive] = useState(0);
  const pillar = PILLARS[active];

  return (
    <section className="py-12 md:py-16 px-4 md:px-10 bg-primary" id="pillars">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 md:mb-10"
        >
          <p className="font-paragraph text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-1.5">
            What Sets Us Apart
          </p>
          <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.8rem)] text-primary-foreground">
            Signature Features
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-0 border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-primary/60 border-r border-white/10 flex flex-col">
            {PILLARS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`relative text-left px-6 py-5 flex items-center gap-4 transition-colors duration-200 group
                  ${i < PILLARS.length - 1 ? 'border-b border-white/8' : ''}
                  ${active === i ? 'bg-accent-gold/15' : 'hover:bg-white/5'}`}
              >
                {active === i && (
                  <motion.div
                    layoutId="pillar-bar"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200
                  ${active === i ? 'bg-accent-gold/20' : 'bg-white/8 group-hover:bg-white/12'}`}
                >
                  <p.icon className={`w-4 h-4 ${active === i ? 'text-accent-gold' : 'text-primary-foreground/50'}`} />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span
                    className={`font-paragraph text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-200
                    ${active === i ? 'text-accent-gold' : 'text-primary-foreground/70'}`}
                  >
                    {p.name}
                  </span>
                  <span
                    className={`font-paragraph text-[9px] tracking-[0.1em] uppercase transition-colors duration-200
                    ${active === i ? 'text-accent-gold/70' : 'text-primary-foreground/35'}`}
                  >
                    {p.accent}
                  </span>
                </div>
                <span
                  className={`ml-auto font-paragraph text-[10px] shrink-0 transition-colors duration-200
                  ${active === i ? 'text-accent-gold/50' : 'text-primary-foreground/25'}`}
                >
                  0{p.id}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-primary/40 flex flex-col justify-center px-10 lg:px-14 py-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/15 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <p className="font-paragraph text-[9px] tracking-[0.25em] uppercase text-accent-gold mb-0.5">
                    Feature 0{pillar.id}
                  </p>
                  <h3 className="font-heading text-[clamp(1.4rem,2.5vw,2rem)] text-primary-foreground leading-tight">
                    {pillar.name}
                  </h3>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0 } as any}
                className="h-px w-10 bg-accent-gold mb-6"
              />

              <p className="font-paragraph text-sm md:text-base text-primary-foreground/65 font-light leading-relaxed max-w-lg mb-8">
                {pillar.desc}
              </p>

              <div className="flex items-center gap-2">
                {pillar.accent.split(' · ').map((tag) => (
                  <span
                    key={tag}
                    className="font-paragraph text-[9px] tracking-[0.12em] uppercase border border-accent-gold/30 text-accent-gold px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-10">
                {PILLARS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 rounded-full ${
                      active === i
                        ? 'w-6 h-1.5 bg-accent-gold'
                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-5 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                <p.icon className="w-4 h-4 text-accent-gold" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-paragraph text-[11px] tracking-[0.15em] uppercase text-primary-foreground font-medium">
                    {p.name}
                  </span>
                  <span className="font-paragraph text-[9px] text-primary-foreground/30 shrink-0">0{p.id}</span>
                </div>
                <p className="font-paragraph text-xs text-primary-foreground/60 font-light leading-relaxed">
                  {p.desc}
                </p>
                <p className="font-paragraph text-[9px] tracking-[0.1em] uppercase text-accent-gold mt-1">
                  {p.accent}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestylePillars;
