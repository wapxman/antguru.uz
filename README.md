# antguru.uz

Маркетплейс услуг для Узбекистана — аналог profi.ru.

Клиенты оставляют заявки, специалисты откликаются и выполняют работу. Платформа зарабатывает на комиссии и платных откликах.

## Документация

- [Архитектура](docs/ARCHITECTURE.md) — структура монорепо, модули, принципы
- [Стек](docs/STACK.md) — используемые технологии
- [ADR](docs/adr/) — архитектурные решения

## Структура

```
antguru.uz/
├── apps/
│   ├── web/     # клиентский сайт (Next.js)
│   ├── admin/   # админ-панель (Next.js)
│   └── api/     # бэкенд (NestJS)
├── packages/
│   ├── db/      # Prisma schema + клиент
│   ├── types/   # общие TS-типы, Zod-схемы
│   ├── ui/      # UI-компоненты (shadcn/ui)
│   ├── config/  # eslint, tsconfig, tailwind
│   └── sdk/     # типизированный API-клиент
└── docs/
```

## Разработка

Требования: Node.js 20+, pnpm 9+.

```bash
pnpm install
pnpm dev       # запуск всех приложений
pnpm build     # сборка
pnpm lint      # линтер
pnpm typecheck # проверка типов
```
