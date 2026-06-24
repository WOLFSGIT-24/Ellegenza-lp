'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import PropertyTabs from '@/components/sections/PropertyTabs';
import KeyHighlights from '@/components/sections/KeyHighlights';
import LifestylePillars from '@/components/sections/LifestylePillars';
import FloorPlans from '@/components/sections/FloorPlans';
import LifestyleStories from '@/components/sections/LifestyleStories';
import LocationSection from '@/components/sections/LocationSection';
import SustainabilitySection from '@/components/sections/SustainabilitySection';
import CommunityLiving from '@/components/sections/CommunityLiving';
import MasterPlan from '@/components/sections/MasterPlan';
import FinalCTA from '@/components/sections/FinalCTA';
import EnquiryPopup from '@/components/EnquiryPopup';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-accent-gold/30 selection:text-primary">
      {/* Global Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <Header />

      <motion.main style={{ opacity }} className="relative z-10">
        <HeroSection />
        <PhilosophySection />
        <PropertyTabs />
        <KeyHighlights />
        <LifestylePillars />
        <FloorPlans />
        <LifestyleStories />
        <LocationSection />
        <SustainabilitySection />
        <CommunityLiving />
        <MasterPlan />
        <FinalCTA />
      </motion.main>

      <Footer />
      <EnquiryPopup />
    </div>
  );
}
