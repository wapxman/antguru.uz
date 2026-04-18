import {
  Hammer, BookOpen, Sparkles, Droplets, Car, Laptop,
  PartyPopper, Truck, Scale, Calculator, Camera, Baby,
  ArrowRight,
} from 'lucide-react';

const CATEGORIES = [
  { name: 'Ремонт и строительство', count: 2430, icon: Hammer, color: 'bg-orange-50 text-orange-600' },
  { name: 'Репетиторы', count: 1820, icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
  { name: 'Красота и здоровье', count: 1540, icon: Sparkles, color: 'bg-pink-50 text-pink-600' },
  { name: 'Клининг', count: 980, icon: Droplets, color: 'bg-cyan-50 text-cyan-600' },
  { name: 'Авто', count: 1120, icon: Car, color: 'bg-slate-100 text-slate-700' },
  { name: 'IT и компьютеры', count: 760, icon: Laptop, color: 'bg-indigo-50 text-indigo-600' },
  { name: 'Праздники и свадьбы', count: 640, icon: PartyPopper, color: 'bg-yellow-50 text-yellow-600' },
  { name: 'Перевозки', count: 520, icon: Truck, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Юридические услуги', count: 380, icon: Scale, color: 'bg-purple-50 text-purple-600' },
  { name: 'Бухгалтерия', count: 290, icon: Calculator, color: 'bg-teal-50 text-teal-600' },
  { name: 'Фото и видео', count: 470, icon: Camera, color: 'bg-rose-50 text-rose-600' },
  { name: 'Няни и сиделки', count: 320, icon: Baby, color: 'bg-amber-50 text-amber-600' },
];

export function Categories() {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Популярные категории</h2>
            <p className="mt-2 text-slate-600">Выберите, что вам нужно — и получите отклики от мастеров.</p>
          </div>
          <a href="#all-categories" className="hidden items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 md:flex">
            Все категории <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.name}
                href="#category"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium text-slate-900 group-hover:text-brand-700">{cat.name}</div>
                  <div className="text-sm text-slate-500">{cat.count.toLocaleString('ru-RU')} специалистов</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
