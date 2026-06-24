'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const STATS = [
  { value: '75,000', unit: 'Sq. Ft.', label: 'Clubhouse' },
  { value: '3 KM', unit: 'Trail', label: 'Nature Trail' },
  { value: 'Dedicated', unit: 'Pet Park', label: 'For Pets & Owners' },
  { value: 'Ceremonial', unit: 'Lawn', label: 'Grand Events' },
  { value: 'Football', unit: 'Ground', label: 'Synthetic Turf' },
  { value: 'Cricket', unit: 'Pitch', label: 'Practice & Leisure' },
  { value: 'Pickleball', unit: 'Court', label: 'Modern Sport' },
  { value: '100', unit: 'Acres', label: 'Villa Community' },
];

const KeyHighlights = () => (
  <section className="w-full bg-background" id="highlights">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-[60vw] min-h-[280px] lg:h-auto overflow-hidden">
          <Image
          src="https://static.wixstatic.com/media/cef78c_98e3de82e31944ec91c1cb58593d2f4c~mv2.jpg"
          alt="Nambiar Ellegenza Purple Crest Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:hidden" />
      </div>

      <div className="bg-primary flex flex-col justify-center px-8 md:px-14 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/5" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border border-white/5" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 relative z-10"
        >
          <p className="font-paragraph text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-2">
            By the Numbers
          </p>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-primary-foreground leading-tight">
            Community Designed for Elevated Living
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden relative z-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary flex flex-col gap-1.5 px-6 py-7 group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-baseline gap-1.5">
                <span
                  className="font-paragraph text-3xl md:text-4xl text-primary-foreground leading-none"
                  style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum"' }}
                >
                  {stat.value}
                </span>
                <span className="font-paragraph text-xs tracking-[0.15em] uppercase text-accent-gold">
                  {stat.unit}
                </span>
              </div>
              <p className="font-paragraph text-[10px] tracking-[0.15em] uppercase text-white/50 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ originX: 0 } as any}
          className="mt-10 h-px w-16 bg-accent-gold relative z-10"
        />
        <p className="mt-3 font-paragraph text-[10px] tracking-[0.2em] uppercase text-white/35 relative z-10">
          Nambiar Ellegenza · Purple Crest
        </p>
      </div>
    </div>
  </section>
);

export default KeyHighlights;
