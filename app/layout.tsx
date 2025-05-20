import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import localfont from 'next/font/local';

const stranger = localfont({
  src:[{
    path: '../public/font/stranger.ttf',
    weight: '700',
  },],
  variable: "--font-stranger",
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chessterix',
  description: 'Chess platform for brave souls',
};

export default function RootLayout({
  children
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${stranger.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
