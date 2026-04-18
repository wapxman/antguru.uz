'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 font-bold text-white">a</span>
          <span className="text-lg font-bold tracking-tight">
            antguru<span className="text-brand-600">.uz</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#categories" className="text-sm text-slate-600 transition hover:text-slate-900">Каталог</Link>
          <Link href="#how-it-works" className="text-sm text-slate-600 transition hover:text-slate-900">Как это работает</Link>
          <Link href="#specialist" className="text-sm text-slate-600 transition hover:text-slate-900">Стать специалистом</Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="#login" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Войти</Link>
          <Link href="#register" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700">Создать заказ</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="menu" className="p-2 md:hidden">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 py-4">
            <Link href="#categories" className="py-2 text-sm">Каталог</Link>
            <Link href="#how-it-works" className="py-2 text-sm">Как это работает</Link>
            <Link href="#specialist" className="py-2 text-sm">Стать специалистом</Link>
            <div className="mt-2 flex gap-2">
              <Link href="#login" className="flex-1 rounded-lg border border-slate-200 py-2 text-center text-sm">Войти</Link>
              <Link href="#register" className="flex-1 rounded-lg bg-brand-600 py-2 text-center text-sm text-white">Создать заказ</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
