'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Shield, MapPin, Heart, Sun, Droplets, Wind } from 'lucide-react';

// Helper Icons
export function TreePineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.8 1.7H17Z" />
      <path d="M12 22v-3" />
    </svg>
  );
}

export function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

// Reusable Animation Components
export const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const TextReveal = ({ text, className = '' }: { text: string; className?: string }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: '100%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.div>
  </div>
);

// Canonical Data
export const AWARDS_DATA = [
  { id: 1, title: '100 Acre Exclusive Villa Community', year: 'Signature', icon: Award },
  { id: 2, title: 'Over 350 Families Residing', year: 'Community', icon: Leaf },
  { id: 3, title: 'Grand Central Park', year: 'Landmark', icon: Shield },
  { id: 4, title: '1 Lakh Sq. Ft. Clubhouse', year: 'Amenity', icon: Award },
  { id: 5, title: 'Close to Top International Schools', year: 'Location', icon: Leaf },
  { id: 6, title: 'Close to Major IT Hubs', year: 'Connectivity', icon: Shield },
];

export const HIGHLIGHTS_DATA = [
  { id: 1, value: '100', label: 'Acre Villa Community', icon: MapPin },
  { id: 2, value: '350+', label: 'Families Residing', icon: TreePineIcon },
  { id: 3, value: '1 Lakh', label: 'Sq. Ft. Clubhouse', icon: Heart },
  { id: 4, value: '3 KM', label: 'Nature Trail', icon: Sun },
];

export const PILLARS_DATA = [
  { id: 1, name: 'Earthy Living', desc: 'Grounded in nature, built with sustainable materials.' },
  { id: 2, name: 'Lived Living', desc: 'Spaces designed for real life, comfort, and joy.' },
  { id: 3, name: 'Sustainable Living', desc: 'Eco-conscious choices for a better tomorrow.' },
  { id: 4, name: 'Active Living', desc: 'Amenities that promote health and vitality.' },
  { id: 5, name: 'Community Living', desc: 'Fostering connections and a sense of belonging.' },
];

export const STORIES_DATA = [
  {
    id: 1,
    title: 'Clubhouse Experience',
    category: 'Amenities',
    img: 'https://static.wixstatic.com/media/cef78c_c6b245b5768e492197f17c3358f738d4~mv2.jpg',
    desc: 'Gym, Indoor Games Area, Banquet Hall, Convenience Store, Salon, Café, Pool Area with Jacuzzi.',
  },
  {
    id: 2,
    title: 'Ceremonial Lawn',
    category: 'Events',
    img: 'https://static.wixstatic.com/media/cef78c_991f0a9837454d5ab2e1b5a9d66b3bc0~mv2.jpg',
    desc: 'Bring celebrations to life in a luxurious ceremonial lawn designed for memorable moments.',
  },
  {
    id: 3,
    title: 'Football Ground',
    category: 'Sports',
    img: 'https://static.wixstatic.com/media/cef78c_6e1bb550aa904052a8c0f1edc4c8db7f~mv2.jpg',
    desc: 'Synthetic turf football ground designed for recreation and sports enthusiasts.',
  },
  {
    id: 4,
    title: 'Cricket Pitch',
    category: 'Sports',
    img: 'https://static.wixstatic.com/media/cef78c_d415016d319d4b248c2e370462d8f07d~mv2.jpg',
    desc: 'Dedicated cricket pitch for practice and leisure.',
  },
  {
    id: 5,
    title: 'Pickleball Court',
    category: 'Sports',
    img: 'https://static.wixstatic.com/media/cef78c_6092b6d4a9914672925ae46f019e5836~mv2.jpg',
    desc: 'Modern pickleball court for one of the fastest-growing sports.',
  },
  {
    id: 6,
    title: 'Jogging Track',
    category: 'Wellness',
    img: 'https://static.wixstatic.com/media/cef78c_ae6c37dfeba044e79ad365147f0b9d80~mv2.jpg',
    desc: 'Beautiful landscaped jogging track through lush greenery.',
  },
  {
    id: 7,
    title: 'Pet Park',
    category: 'Lifestyle',
    img: 'https://static.wixstatic.com/media/cef78c_9ba25bf956fb4919a5d65a495c4ee1da~mv2.jpg',
    desc: 'Dedicated pet-friendly spaces designed for pets and pet parents.',
  },
  {
    id: 8,
    title: 'Leisure Lawn',
    category: 'Lifestyle',
    img: 'https://static.wixstatic.com/media/cef78c_d0b31761b0b14b03b0e3a6fb2b80fb28~mv2.jpg',
    desc: 'Relax, unwind and reconnect with nature.',
  },
];

export const SUSTAINABILITY_DATA = [
  { id: 1, title: 'EV Charging Stations', icon: ZapIcon },
  { id: 2, title: 'Rainwater Harvesting', icon: Droplets },
  { id: 3, title: 'Solar Powered Lighting', icon: Sun },
  { id: 4, title: 'Natural Cross Ventilation', icon: Wind },
];
