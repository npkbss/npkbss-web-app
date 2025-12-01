import { AuthSessionProvider } from '@/components/auth-session-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import LayoutClient from './LayoutClient';

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
          <LayoutClient>{children}</LayoutClient>

          {/* CloudFlare */}
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></Script>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
