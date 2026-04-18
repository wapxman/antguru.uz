import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'antguru.uz — маркетплейс услуг в Узбекистане',
  description:
    'Найдите проверенного мастера за 5 минут: ремонт, репетиторы, красота, клининг, авто и ещё 50+ категорий услуг по всему Узбекистану.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
