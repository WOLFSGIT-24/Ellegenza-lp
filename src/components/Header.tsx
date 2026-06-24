'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';

const NAV_LINKS = [
  { label: 'About', id: 'philosophy' },
  { label: 'Home Features', id: 'property-tabs' },
  { label: 'Floor Plans', id: 'floor-plans' },
  { label: 'Amenities', id: 'amenities' },
  { label: 'Master Plan', id: 'masterplan' },
  { label: 'Location', id: 'location' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-secondary"
        style={{ height: 80 }}
      >
        <div className="max-w-[120rem] mx-auto px-6 md:px-10 h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="shrink-0">
            <Image
              src="https://static.wixstatic.com/media/cef78c_7c4ed4a92203401fb69f4db897b1f2e8~mv2.png"
              alt="Nambiar Ellegenza Purple Crest"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-background/20 px-3 py-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setActiveId(link.id);
                }}
                className={`px-4 py-1.5 rounded-full font-paragraph text-[10px] tracking-[0.12em] uppercase transition-all duration-300 ${
                  activeId === link.id
                    ? 'bg-accent-gold text-white'
                    : 'text-background/60 hover:text-accent-gold'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => window.dispatchEvent(new Event('open-enquiry-popup'))}
              className="hidden sm:flex items-center gap-2 rounded-full border border-background/30 text-background px-5 py-2 font-paragraph text-[10px] tracking-[0.15em] uppercase hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
            >
              <Phone className="w-3 h-3" />
              Enquire Now
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-background"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[80px] left-0 right-0 z-40 bg-secondary border-b border-white/10 shadow-lg lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollTo(link.id);
                    setMobileOpen(false);
                    setActiveId(link.id);
                  }}
                  className={`text-left px-4 py-3 rounded-lg font-paragraph text-[11px] tracking-[0.15em] uppercase transition-colors ${
                    activeId === link.id
                      ? 'text-accent-gold'
                      : 'text-background/60 hover:text-accent-gold'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  window.dispatchEvent(new Event('open-enquiry-popup'));
                  setMobileOpen(false);
                }}
                className="mt-3 flex items-center justify-center gap-2 border border-background/20 rounded-full py-3 font-paragraph text-[11px] tracking-[0.15em] uppercase text-background hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                <Phone className="w-3 h-3" />
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
