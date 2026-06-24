'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { FadeIn, STORIES_DATA } from './shared';

const LifestyleStories = () => (
  <section className="py-32 bg-bg-warm" id="stories">
    <div className="max-w-[120rem] mx-auto px-8">
      <FadeIn className="mb-20">
        <h3 className="font-paragraph text-sm tracking-[0.2em] uppercase text-accent-gold mb-4">
          Our Amenities
        </h3>
        <h2 className="font-heading text-5xl md:text-6xl text-primary">Lifestyle at Purple Crest</h2>
      </FadeIn>

      <div className="space-y-32">
        {STORIES_DATA.map((story, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={story.id}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-3/5 relative h-[60vh] rounded-[24px] overflow-hidden group">
                <Image
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/5 relative">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="bg-background/95 backdrop-blur-xl p-12 rounded-[24px] shadow-[0_30px_60px_rgba(6,47,74,0.08)] border border-primary/10 relative z-10 md:-ml-24 lg:-ml-32"
                  style={!isEven ? { marginLeft: 0, marginRight: '-6rem' } : {}}
                >
                  <p className="font-paragraph text-sm tracking-widest uppercase text-accent-gold mb-4">
                    {story.category}
                  </p>
                  <h3 className="font-heading text-4xl text-primary mb-6">{story.title}</h3>
                  <p className="font-paragraph text-foreground/70 font-light leading-relaxed">
                    {story.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LifestyleStories;
