/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '300' }],
        sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '300' }],
        base: ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em', fontWeight: '300' }],
        lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.02em', fontWeight: '300' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '300' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '300' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.01em', fontWeight: '300' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0em', fontWeight: '300' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '300' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '300' }],
        '8xl': ['6rem', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '300' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '300' }],
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        paragraph: ['Inter', 'sans-serif'],
      },
      colors: {
        /* ── 10% Accent — Brochure Gold ── */
        'accent-gold':        '#C8A66A',
        'accent-gold-light':  '#D0B173',

        /* ── 30% Secondary Neutral — Warm Ivory / Champagne ── */
        background:    '#F7F2EB',   /* main light bg */
        'bg-warm':     '#F3EEE6',   /* alternate section bg */
        'bg-section':  '#EDE5DA',   /* deeper ivory for cards */

        /* ── Body text on light ── */
        foreground:    '#062F4A',   /* headings on ivory */

        /* ── 60% Primary — Deep Luxury Navy Blue ── */
        primary:             '#062F4A',
        'primary-foreground': '#F7F2EB',

        /* ── Header / Footer / Dark sections ── */
        secondary:            '#062F4A',
        'secondary-foreground': '#F7F2EB',

        /* ── Muted text ── */
        muted:            '#4A5560',
        'muted-foreground': '#C8B8AE',

        /* ── Misc tokens ── */
        'warm-orange-accent': '#C8A66A',
        'muted-teal':         '#062F4A',
        'white-overlay':      'rgba(247,242,235,0.72)',
        destructive:          '#C0392B',
        'destructive-foreground': '#F7F2EB',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
