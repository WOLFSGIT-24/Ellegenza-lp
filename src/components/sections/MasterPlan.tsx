'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const PLAN_IMAGE =
  'https://static.wixstatic.com/media/cef78c_cdc1d6d44b6f46f0816df5f80036a6f3~mv2.png';

const MasterPlan = () => (
  <section className="relative bg-primary py-10 md:py-14 overflow-hidden" id="masterplan">
    <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full border border-white/[0.04] pointer-events-none" />
    <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.04] pointer-events-none" />

    <div className="max-w-[120rem] mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-7 md:mb-10"
      >
        <p className="font-paragraph text-[10px] tracking-[0.35em] uppercase text-accent-gold mb-3">
          Site Layout
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,5vw,4.5rem)] text-primary-foreground leading-[1.05]">
          The Master Plan
        </h2>
        <div className="mt-4 h-px w-16 bg-accent-gold" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
      >
        <Image
          src={PLAN_IMAGE}
          alt="Nambiar Ellegenza Purple Crest Master Plan"
          className="w-full h-auto block"
        />
      </motion.div>
    </div>
  </section>
);

export default MasterPlan;
