'use client';

import React from 'react';
import { Image } from '@/components/ui/image';
import { FadeIn } from './shared';

const CommunityLiving = () => (
  <section className="py-8 md:py-12 bg-bg-warm" id="community">
    <div className="max-w-[120rem] mx-auto px-5 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="w-full lg:w-3/5 relative h-[55vw] min-h-[240px] max-h-[520px] lg:h-[60vh] rounded-2xl overflow-hidden">
          <Image
            src="https://static.wixstatic.com/media/cef78c_31b95d1386124cf6bce83b261bc339bd~mv2.jpg"
            alt="Nambiar Ellegenza Purple Crest"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <FadeIn>
            <h3 className="font-paragraph text-sm tracking-[0.2em] uppercase text-accent-gold mb-3">
              About Purple Crest
            </h3>
            <h2 className="font-heading text-3xl md:text-5xl text-primary mb-5">
              Unrivalled Comfort, Unmatched Indulgence
            </h2>
            <p className="font-paragraph text-base text-foreground/80 font-light leading-relaxed mb-6">
              Ellegenza Purple Crest offers an array of amenities that cater to your every need, making everyday living an experience in itself. Enjoy the luxury of a sprawling 75,000 sq. ft. clubhouse, where social gatherings, fitness and leisure blend seamlessly. A dedicated pet park ensures your furry companions enjoy the same elevated lifestyle.
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-enquiry-popup'))}
              className="bg-accent-gold text-primary hover:bg-accent-gold-light rounded-full px-7 py-3 text-sm font-paragraph transition-colors duration-300"
            >
              Discover Amenities
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default CommunityLiving;
