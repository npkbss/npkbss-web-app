import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Header from '@/components/Header';
import Script from 'next/script';
import { AuthSessionProvider } from '@/components/auth-session-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NPK Business Solutions',
  description: 'Driving Sustainable Growth Through Digital Transformation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthSessionProvider>
          <Header />
          {children}
          <WhatsAppFloat />
          <Analytics />
          <SpeedInsights />
          <Footer />

          {/* CloudFlare */}
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></Script>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
