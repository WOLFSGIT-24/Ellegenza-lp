'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnquiryFields, ThankYouModal } from '@/components/EnquiryPopup';

const BG = 'https://static.wixstatic.com/media/cef78c_44969e652e4240e8a68aef3f5b4d7db0~mv2.jpg';
type FormState = { name: string; phone: string; email: string; message: string };
const EMPTY: FormState = { name: '', phone: '', email: '', message: '' };

const FinalCTA = () => {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [thanks, setThanks] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    if (!form.name || !form.phone || !form.email) {
      alert('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    try {
      // In standalone mode, just show thank you
      await new Promise((r) => setTimeout(r, 600));
      setForm(EMPTY);
      setThanks(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit enquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
        id="contact"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-12 py-12 md:py-20 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <p className="font-paragraph text-[9px] tracking-[0.3em] uppercase text-accent-gold mb-2">Contact Us</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight mb-6">
              Nambiar Ellegenza<br />Purple Crest
            </h2>
            <div className="flex flex-col gap-3">
              <a href="tel:+919019347347" className="font-paragraph text-lg text-white hover:text-accent-gold transition-colors">
                +91 90193 47347
              </a>
              <a href="tel:+918066696000" className="font-paragraph text-lg text-white hover:text-accent-gold transition-colors">
                +91 80666 96000
              </a>
              <div className="mt-2 h-px w-10 bg-accent-gold lg:mx-0 mx-auto" />
              <p className="font-paragraph text-xs text-white/50 leading-relaxed max-w-xs">
                Outer Ring Road, Kadubeesanahalli,<br />Bellandur, Bengaluru — 560103
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[420px] shrink-0 bg-primary/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <div className="mb-5">
              <p className="font-paragraph text-[9px] tracking-[0.3em] uppercase text-accent-gold mb-1">
                Nambiar Ellegenza
              </p>
              <h3 className="font-heading text-xl text-primary-foreground">Purple Crest — Schedule a Visit</h3>
              <div className="mt-2 h-px w-10 bg-accent-gold" />
            </div>
            <EnquiryFields form={form} onChange={setForm} onSubmit={submit} dark isLoading={isLoading} />
          </motion.div>
        </div>
      </section>
      <ThankYouModal open={thanks} onClose={() => setThanks(false)} />
    </>
  );
};

export default FinalCTA;
