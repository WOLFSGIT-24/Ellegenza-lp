'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

type FormState = { name: string; phone: string; email: string; message: string };
const EMPTY: FormState = { name: '', phone: '', email: '', message: '' };

// ── Thank You Modal ──────────────────────────────────────────────
export const ThankYouModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-primary rounded-2xl px-8 py-10 max-w-sm w-full text-center shadow-2xl border border-white/10 z-10"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <CheckCircle className="w-10 h-10 text-accent-gold mx-auto mb-4" />
          <h3 className="font-heading text-2xl text-primary-foreground mb-2">Thank You</h3>
          <p className="font-paragraph text-sm text-white/60 leading-relaxed mb-6">
            We've received your enquiry. Our team will reach out to you shortly.
          </p>
          <button
            onClick={onClose}
            className="font-paragraph text-[10px] tracking-[0.25em] uppercase text-accent-gold border border-accent-gold/40 px-6 py-2.5 hover:bg-accent-gold/10 transition-colors rounded-sm"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ── Shared Form Fields ───────────────────────────────────────────
export const EnquiryFields = ({
  form,
  onChange,
  onSubmit,
  dark = true,
  isLoading = false,
}: {
  form: FormState;
  onChange: (f: FormState) => void;
  onSubmit: () => void;
  dark?: boolean;
  isLoading?: boolean;
}) => {
  const base = `w-full font-paragraph text-sm px-4 py-3 rounded-lg border outline-none transition-colors duration-200 bg-transparent placeholder:text-white/30`;
  const cls = dark
    ? `${base} border-white/15 text-white focus:border-accent-gold`
    : `${base} border-primary/20 text-primary placeholder:text-primary/30 focus:border-accent-gold`;

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...form, [k]: e.target.value });

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          className={cls}
          placeholder="Your Name"
          value={form.name}
          onChange={set('name')}
          disabled={isLoading}
        />
        <input
          className={cls}
          placeholder="Phone Number"
          type="tel"
          value={form.phone}
          onChange={set('phone')}
          disabled={isLoading}
        />
      </div>
      <input
        className={cls}
        placeholder="Email Address"
        type="email"
        value={form.email}
        onChange={set('email')}
        disabled={isLoading}
      />
      <textarea
        className={`${cls} resize-none`}
        placeholder="Message (optional)"
        rows={3}
        value={form.message}
        onChange={set('message')}
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full bg-accent-gold text-primary font-paragraph text-[11px] tracking-[0.25em] uppercase py-3.5 rounded-lg hover:bg-accent-gold/90 transition-colors duration-200 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </div>
  );
};

// ── Popup ────────────────────────────────────────────────────────
const EnquiryPopup = () => {
  const [open, setOpen] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Auto-open after 4 seconds
    const timer = setTimeout(() => setOpen(true), 4000);
    const handler = () => setOpen(true);
    window.addEventListener('open-enquiry-popup', handler);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-enquiry-popup', handler);
    };
  }, []);

  const submit = async () => {
    if (!form.name || !form.phone || !form.email) {
      alert('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    try {
      // Standalone mode — simulate submission
      await new Promise((r) => setTimeout(r, 600));
      setOpen(false);
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
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="relative bg-primary rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl border border-white/10 z-10"
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-5">
                <p className="font-paragraph text-[9px] tracking-[0.3em] uppercase text-accent-gold mb-1">
                  Nambiar Ellegenza
                </p>
                <h3 className="font-heading text-xl text-primary-foreground">Purple Crest — Schedule a Visit</h3>
                <div className="mt-2 h-px w-10 bg-accent-gold" />
              </div>

              <EnquiryFields
                form={form}
                onChange={setForm}
                onSubmit={submit}
                dark
                isLoading={isLoading}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ThankYouModal open={thanks} onClose={() => setThanks(false)} />
    </>
  );
};

export default EnquiryPopup;
