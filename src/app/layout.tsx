import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Nambiar Ellegenza Purple Crest – Where Life Meets Luxury',
  description: 'Luxury Villa Community off Sarjapur Road, Bengaluru. 75,000 Sq. Ft. Clubhouse, 3 KM Nature Trail, Private Elevators & French Style Balconies.',
  icons: {
    icon: 'https://static.wixstatic.com/media/cef78c_3bb651eb0fbc4e36bd6308e8094fe0f5~mv2.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full h-full">
      <head>
        <link rel="preconnect" href="https://static.parastorage.com" />
      </head>
      <body className="w-full h-full">
        {children}
      </body>
    </html>
  );
}
