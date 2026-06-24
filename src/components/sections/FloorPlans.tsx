'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const PLANS = [
  {
    id: 1,
    name: 'Type A',
    type: 'Sale Area: 3304 Sq.Ft.',
    image: 'https://static.wixstatic.com/media/cef78c_7cf699a88e354cd7817c31eb251efb0b~mv2.png',
    details: 'Carpet: 2114 Sq.Ft. · Total: 2399 Sq.Ft.',
  },
  {
    id: 2,
    name: 'Type B',
    type: 'Sale Area: 4068 Sq.Ft.',
    image: 'https://static.wixstatic.com/media/cef78c_8f5d25b2f9064de080e1453b0ccaa691~mv2.png',
    details: 'Carpet: 2608 Sq.Ft. · Total: 3008 Sq.Ft.',
  },
  {
    id: 3,
    name: 'Type C',
    type: 'Sale Area: 4497 Sq.Ft.',
    image: 'https://static.wixstatic.com/media/cef78c_0d09d9665a8642ef913a0b2f5a960119~mv2.png',
    details: 'Carpet: 2954 Sq.Ft. · Total: 3368 Sq.Ft.',
  },
  {
    id: 4,
    name: 'Type D',
    type: 'Sale Area: 5608 Sq.Ft.',
    image: 'https://static.wixstatic.com/media/cef78c_7cf699a88e354cd7817c31eb251efb0b~mv2.png',
    details: 'Carpet: 3821 Sq.Ft. · Total: 4292 Sq.Ft.',
  },
];

const FloorPlans = () => (
  <section className="py-10 md:py-14 px-4 md:px-10 bg-bg-warm" id="floor-plans">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-7"
      >
        <p className="font-paragraph text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-1.5">
          Layouts
        </p>
        <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.6rem)] text-primary">Floor Plans</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex flex-col rounded-2xl overflow-hidden border border-primary/10 bg-background shadow-sm"
          >
            <div className="relative overflow-hidden bg-background" style={{ height: 240 }}>
              <Image
                src={plan.image}
                alt={plan.name}
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                style={{ filter: 'blur(5px)', transform: 'scale(1.08)', objectFit: 'contain' }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-background/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => window.dispatchEvent(new Event('open-enquiry-popup'))}
                  className="group flex items-center gap-2 bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm px-5 py-2.5 font-paragraph text-[10px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-lg"
                >
                  Get Floor Plan
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-primary/10">
              <p className="font-paragraph text-[9px] tracking-[0.2em] uppercase text-accent-gold mb-0.5">
                {plan.type}
              </p>
              <p className="font-paragraph text-sm text-primary/80">{plan.name}</p>
              <p className="font-paragraph text-[9px] text-foreground/50 mt-0.5">{plan.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FloorPlans;
