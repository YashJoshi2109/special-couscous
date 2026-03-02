'use client';

import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { queryClient } from '@/lib/queryClient';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newValue);
  };

  if (!mounted) return null;

  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      <head>
        <meta charSet="utf-8" />
        <title>HotelShift Pro - Super8 Bedford Employee Management</title>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5, user-scalable=yes"
        />
        <meta
          name="description"
          content="HotelShift Pro - Premium employee management & time tracking for Super8 Bedford. Clock in, track earnings, scan vouchers and manage your paystub."
        />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="HotelShift Pro" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script dangerouslySetInnerHTML={{
          __html: `
            const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            if (theme === 'dark') document.documentElement.classList.add('dark');
            // Set safe area CSS variables for iOS
            document.documentElement.style.setProperty('--safe-area-inset-top', 'env(safe-area-inset-top)');
            document.documentElement.style.setProperty('--safe-area-inset-bottom', 'env(safe-area-inset-bottom)');
            document.documentElement.style.setProperty('--safe-area-inset-left', 'env(safe-area-inset-left)');
            document.documentElement.style.setProperty('--safe-area-inset-right', 'env(safe-area-inset-right)');
          `
        }} />
      </head>
      <body className="bg-gradient-to-br from-neutral-50 to-neutral-100    transition-colors">
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster position="bottom-center" />
        </QueryClientProvider>
      </body>
    </html>
  );
}
