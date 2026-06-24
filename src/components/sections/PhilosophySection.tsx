'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { FadeIn } from './shared';

const PhilosophySection = () => (
  <section className="py-8 md:py-10 px-5 md:px-10 relative bg-background overflow-hidden" id="philosophy">
    <motion.div
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(184,137,42,0.12) 0%, transparent 70%)',
        backgroundSize: '100% 100%',
      }}
    />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <FadeIn>
        <Leaf className="w-5 h-5 mx-auto text-accent-gold mb-4 opacity-70" />
        <h2 className="font-heading text-[clamp(1.6rem,4vw,3.2rem)] text-primary leading-[1.2] mb-4">
          Unrivalled Comfort, Unmatched Indulgence
        </h2>
        <p className="font-paragraph text-sm md:text-base text-foreground/65 max-w-xl mx-auto font-light leading-relaxed">
          Ellegenza Purple Crest offers an array of amenities that cater to your every need, making everyday living an experience in itself.
          Enjoy the luxury of a sprawling 75,000 sq. ft. clubhouse, where social gatherings, fitness and leisure blend seamlessly.
          A dedicated pet park ensures your furry companions enjoy the same elevated lifestyle.
          For nature lovers, the 3 km nature trail meanders through lush landscapes, offering a peaceful retreat just outside your door.
          The development also includes a ceremonial lawn where life's biggest moments can be celebrated with grandeur.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default PhilosophySection;
