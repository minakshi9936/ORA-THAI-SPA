import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import InquiryPopup from '@/components/InquiryPopup';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ORA Thai Spa Lucknow - Authentic Thai Massage & Wellness Center',
  description: 'Experience the ultimate relaxation at ORA Thai Spa Lucknow, India\'s leading authentic Thai massage and wellness center. Our skilled therapists provide traditional Thai massage, aromatherapy, reflexology, and various rejuvenating spa treatments in a serene and luxurious environment. Located in Gomti Nagar, Lucknow, we specialize in promoting physical and mental well-being through ancient healing techniques. From deep tissue massages to holistic wellness therapies, discover your path to rejuvenation. Book your appointment today for a transformative wellness experience that will leave you refreshed and revitalized.',
  keywords: ['Thai massage Lucknow', 'authentic Thai spa', 'traditional massage', 'aromatherapy massage', 'foot reflexology', 'wellness center Lucknow', 'spa treatments', 'rejuvenation therapy', 'Gomti Nagar spa', 'spa in lucknow'],
  openGraph: {
    title: 'ORA Thai Spa Lucknow - Authentic Thai Massage & Wellness Center',
    description: 'Experience the ultimate relaxation at ORA Thai Spa Lucknow, India\'s leading authentic Thai massage and wellness center. Our skilled therapists provide traditional Thai massage, aromatherapy, reflexology, and various rejuvenating spa treatments in a serene and luxurious environment.',
    url: '/favicon.png',
    siteName: 'ORA Thai Spa Lucknow',
    images: [
      {
        url: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1762157764/logos/logo_1762157764730.jpg',
        width: 1200,
        height: 630,
        alt: 'ORA Thai Spa Lucknow - Authentic Thai Massage & Wellness Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <WhatsAppFloat />
        <InquiryPopup />
      </body>
    </html>
  );
}
