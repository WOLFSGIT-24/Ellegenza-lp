'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './shared';

const amenities = [
  { name: '75,000 Sq. Ft. Clubhouse', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><rect x="15" y="35" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/><path d="M 15 50 L 85 50" stroke="currentColor" strokeWidth="1.5"/><rect x="30" y="55" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" rx="2"/><path d="M 25 35 L 50 20 L 75 35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg> },
  { name: 'Private Elevators', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><rect x="30" y="20" width="40" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/><path d="M 40 42 L 50 32 L 60 42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M 40 58 L 50 68 L 60 58" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'French Balconies', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><rect x="30" y="40" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="2" rx="2"/><line x1="30" y1="55" x2="70" y2="55" stroke="currentColor" strokeWidth="1.5"/><path d="M 20 40 L 30 40 M 70 40 L 80 40" stroke="currentColor" strokeWidth="2"/><path d="M 30 40 L 30 35 M 70 40 L 70 35" stroke="currentColor" strokeWidth="2"/></svg> },
  { name: 'Skylights', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><rect x="25" y="45" width="50" height="30" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/><circle cx="50" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M 40 48 Q 50 42 60 48" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M 50 25 L 50 18 M 40 27 L 35 22 M 60 27 L 65 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name: 'Pet Park', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><circle cx="35" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="50" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="65" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M 30 55 Q 50 70 70 55" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M 42 48 L 50 65 L 58 48" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: 'Cricket Pitch', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><ellipse cx="50" cy="55" rx="28" ry="20" fill="none" stroke="currentColor" strokeWidth="2"/><rect x="44" y="30" width="12" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" rx="2"/><line x1="42" y1="75" x2="58" y2="75" stroke="currentColor" strokeWidth="2"/></svg> },
  { name: 'Football Ground', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><rect x="15" y="30" width="70" height="45" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="50" cy="52" r="12" fill="none" stroke="currentColor" strokeWidth="1.5"/><line x1="50" y1="30" x2="50" y2="75" stroke="currentColor" strokeWidth="1.5"/><rect x="15" y="43" width="10" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="75" y="43" width="10" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: 'Pickleball Court', icon: <svg viewBox="0 0 100 100" className="w-10 h-10"><rect x="20" y="25" width="60" height="50" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="2"/><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,3"/><circle cx="35" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="65" cy="62" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg> },
];

import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const AmenitiesSection = () => (
  <section className="py-8 md:py-10 bg-background" id="amenities">
    <div className="max-w-6xl mx-auto px-5 md:px-10">
      <FadeIn>
        <div className="text-center mb-6">
          <h3 className="font-paragraph text-[10px] tracking-[0.25em] uppercase text-accent-gold mb-2">
            Lifestyle Essentials
          </h3>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary">Premium Amenities</h2>
        </div>
      </FadeIn>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {amenities.map((amenity, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className="group bg-bg-warm hover:bg-primary/5 border border-primary/10 rounded-xl p-4 transition-all duration-300 hover:border-accent-gold/30 hover:shadow-sm flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 group-hover:from-accent-gold/20 group-hover:to-accent-gold/10 flex items-center justify-center transition-all duration-300">
              <div className="text-primary group-hover:text-accent-gold transition-colors duration-300">
                {amenity.icon}
              </div>
            </div>
            <p className="font-paragraph text-[11px] text-foreground/70 leading-tight group-hover:text-primary transition-colors duration-300">
              {amenity.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AmenitiesSection;
