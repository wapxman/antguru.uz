import { PenLine, MessagesSquare, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: PenLine,
    title: 'Опишите задачу',
    text: 'Расскажите, что нужно сделать, где и когда. Это бесплатно и займёт меньше минуты.',
  },
  {
    num: '02',
    icon: MessagesSquare,
    title: 'Получите отклики',
    text: 'Проверенные специалисты пришлют свои предложения с ценой и сроками в течение часа.',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Выберите и работайте',
    text: 'Сравните отзывы и рейтинги, обсудите детали в чате и выберите подходящего мастера.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Как это работает</h2>
          <p className="mt-3 text-slate-600">Три простых шага от задачи до результата</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="relative rounded-2xl border border-slate-200 bg-white p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-bold text-slate-300">{s.num}</div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
