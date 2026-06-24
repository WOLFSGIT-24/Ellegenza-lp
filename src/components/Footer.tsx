'use client';

import { Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-[120rem] mx-auto px-5 md:px-10 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 md:justify-between">
          <Image
            src="https://static.wixstatic.com/media/cef78c_7c4ed4a92203401fb69f4db897b1f2e8~mv2.png"
            alt="Nambiar Ellegenza Purple Crest"
            className="h-14 w-auto object-contain"
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <a
              href="tel:+919019347347"
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-accent-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              +91 90193 47347
            </a>
            <a
              href="tel:+918066696000"
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-accent-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              +91 80666 96000
            </a>
            <span className="flex items-center gap-2 text-secondary-foreground/70">
              <MapPin className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              Outer Ring Road, Bellandur, Bengaluru 560103
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/50 hover:text-accent-gold transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/50 hover:text-accent-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/50 hover:text-accent-gold transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-secondary-foreground/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] tracking-wide text-secondary-foreground/40">
          <p>© {new Date().getFullYear()} Nambiar Ellegenza Purple Crest. All rights reserved.</p>
          <p>Off Sarjapur Road, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
