import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 font-bold text-white">a</span>
              <span className="text-lg font-bold tracking-tight">
                antguru<span className="text-brand-600">.uz</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Маркетплейс услуг № 1 в Узбекистане. Находите проверенных мастеров для любых задач.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Клиентам</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-slate-900">Все категории</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Как это работает</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Гарантии</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Отзывы</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Специалистам</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-slate-900">Зарегистрироваться</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Тарифы</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Правила</Link></li>
              <li><Link href="#" className="hover:text-slate-900">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Компания</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-slate-900">О нас</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Контакты</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Блог</Link></li>
              <li><Link href="#" className="hover:text-slate-900">Вакансии</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-slate-500">© 2026 antguru.uz. Все права защищены.</div>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-900">Пользовательское соглашение</Link>
            <Link href="#" className="hover:text-slate-900">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
