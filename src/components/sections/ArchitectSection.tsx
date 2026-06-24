'use client';

import React from 'react';
import { FadeIn, AWARDS_DATA } from './shared';

const ArchitectSection = () => (
  <section className="py-24 px-8 md:px-24 max-w-[120rem] mx-auto" id="architect">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-4 flex flex-col gap-12">
        {AWARDS_DATA.map((award, index) => (
          <FadeIn key={award.id} delay={index * 0.2} className="flex items-start gap-6 group">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shrink-0">
              <award.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-xl text-primary mb-1">{award.title}</h4>
              <p className="font-paragraph text-sm text-foreground/60 tracking-widest uppercase">
                {award.year}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="lg:col-span-8 relative">
        <div className="absolute -inset-12 bg-white-overlay rounded-[40px] blur-3xl -z-10" />
        <FadeIn>
          <h3 className="font-paragraph text-sm tracking-[0.2em] uppercase text-accent-gold mb-6">
            Signature Landmarks
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl text-primary leading-tight mb-8">
            "100 Acre Exclusive Villa Community. Over 350 families residing in a landmark development close to top international schools and major IT hubs."
          </h2>
          <p className="font-paragraph text-lg text-foreground/80 font-light">
            — Nambiar Ellegenza Purple Crest
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ArchitectSection;
