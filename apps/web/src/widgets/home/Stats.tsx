const STATS = [
  { value: '10 000+', label: 'Специалистов' },
  { value: '50 000+', label: 'Выполненных заказов' },
  { value: '4.8', label: 'Средний рейтинг' },
  { value: '60+', label: 'Категорий услуг' },
];

export function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-slate-900 md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
