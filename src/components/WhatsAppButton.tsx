'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHONE = '917349410145'; // WhatsApp needs country code, no spaces or dashes
const MESSAGE = encodeURIComponent('Hello! I am interested in Nambiar Ellegenza Purple Crest. Please share more details.');

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#25D366] text-white text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      {/* Icon button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white relative z-10"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.26 13.26 0 0 1-6.747-1.84l-.484-.287-5.009 1.194 1.216-4.877-.317-.502A13.227 13.227 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.878c-.398-.199-2.352-1.16-2.716-1.292-.364-.133-.629-.199-.894.199-.265.398-1.027 1.292-1.259 1.558-.232.265-.464.298-.862.1-.398-.199-1.682-.62-3.203-1.978-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.179.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.697-.1-.199-.894-2.156-1.225-2.952-.322-.775-.65-.67-.894-.682l-.762-.013c-.265 0-.697.1-1.061.497-.364.398-1.392 1.36-1.392 3.316s1.425 3.847 1.623 4.112c.199.265 2.804 4.28 6.793 6.003.95.41 1.691.655 2.269.839.953.304 1.821.261 2.507.158.765-.114 2.352-.961 2.683-1.889.332-.928.332-1.723.232-1.889-.099-.166-.364-.265-.762-.464z" />
        </svg>
      </motion.div>
    </a>
  );
}
