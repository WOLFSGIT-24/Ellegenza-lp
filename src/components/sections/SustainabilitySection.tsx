'use client';

import React from 'react';
import { Leaf } from 'lucide-react';
import { FadeIn, SUSTAINABILITY_DATA } from './shared';

const SustainabilitySection = () => (
  <section
    className="py-8 md:py-12 bg-secondary text-secondary-foreground relative overflow-hidden"
    id="sustainability"
  >
    <Leaf className="absolute -right-20 -bottom-20 w-[600px] h-[600px] text-white/5 pointer-events-none" />

    <div className="max-w-[120rem] mx-auto px-8 relative z-10">
      <div className="text-center mb-8 md:mb-12">
        <FadeIn>
          <h3 className="font-paragraph text-sm tracking-[0.2em] uppercase text-accent-gold mb-4">
            Future Forward
          </h3>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white">
            Built for a Better Tomorrow
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        {SUSTAINABILITY_DATA.map((item, index) => (
          <FadeIn
            key={item.id}
            delay={index * 0.15}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
              <item.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="font-heading text-xl text-white">{item.title}</h4>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SustainabilitySection;
