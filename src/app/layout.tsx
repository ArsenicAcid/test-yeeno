import React from 'react'
import type { Metadata } from 'next';
import './globals.css'
import { roboto, pageWidth } from './components/variables'

export const metadata: Metadata = {
  title: "Yeeno's Test",
  description: "Pages created by Yeeno",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col items-center px-10 lg:px-0">
      <body
        className={`${roboto.className} antialiased flex flex-col items-center self-center w-full`}
        style={{maxWidth: pageWidth}}
      >
        {children}
      </body>
    </html>
  );
}
