import { TrendingUp, Users, Wallet, ArrowRight } from 'lucide-react';

const BENEFITS = [
  { icon: Users, text: 'Поток клиентов без поиска' },
  { icon: Wallet, text: 'Платите только за целевые отклики' },
  { icon: TrendingUp, text: 'Растите рейтинг и зарабатывайте больше' },
];

export function SpecialistCta() {
  return (
    <section id="specialist" className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 p-10 md:p-16">
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Станьте специалистом на antguru.uz
              </h2>
              <p className="mt-4 text-base text-slate-300 md:text-lg">
                Присоединяйтесь к 10 000 мастеров, которые получают заказы каждый день.
                Регистрация бесплатная, вы платите только за отклики на реальных клиентов.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#register-specialist" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                  Зарегистрироваться <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#learn-more" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                  Подробнее
                </a>
              </div>
            </div>
            <ul className="space-y-4">
              {BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.text} className="flex items-center gap-4 rounded-xl bg-white/5 p-4 backdrop-blur">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-white md:text-base">{b.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
