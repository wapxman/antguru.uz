import { Search, MapPin, Sparkles } from 'lucide-react';

const QUICK_TAGS = [
  'Ремонт квартиры',
  'Репетитор английского',
  'Маникюр на дому',
  'Уборка',
  'Ремонт авто',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm text-brand-700">
            <Sparkles className="h-4 w-4" />
            Новый маркетплейс услуг в Узбекистане
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Найдите мастера <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-600 to-indigo-500 bg-clip-text text-transparent">за 5 минут</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 md:text-lg">
            Более 10 000 проверенных специалистов в Ташкенте и других городах.
            Сравнивайте отклики, читайте отзывы, выбирайте лучшего.
          </p>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-2 md:px-3">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Что нужно сделать?"
                className="w-full border-0 bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="hidden h-6 w-px bg-slate-200 md:block" />
            <div className="flex items-center gap-2 md:min-w-44 md:px-3">
              <MapPin className="h-5 w-5 text-slate-400" />
              <select className="w-full border-0 bg-transparent py-2 text-sm outline-none" defaultValue="Ташкент">
                <option>Ташкент</option>
                <option>Самарканд</option>
                <option>Бухара</option>
                <option>Наманган</option>
                <option>Андижан</option>
              </select>
            </div>
            <button type="button" className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-700">
              Найти специалиста
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-slate-500">Часто ищут:</span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
