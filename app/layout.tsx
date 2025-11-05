import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import InquiryPopup from '@/components/InquiryPopup';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Ora Thai Spa - Premium Thai Massage & Wellness',
  description: 'Experience authentic Thai massage and wellness treatments in a serene, luxurious environment. Book your spa appointment today.',
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
