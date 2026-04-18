# @antguru/api

Backend antguru.uz (NestJS 10). Порт: 4000. Префикс: `/api`.

## Структура

```
src/
├── main.ts              # точка входа
├── app.module.ts        # корневой модуль
├── health.controller.ts # /api/health
└── modules/             # бизнес-модули (auth, users, orders, ...)
    └── <module>/
        ├── *.module.ts
        ├── *.controller.ts
        ├── *.service.ts
        ├── *.repository.ts
        ├── dto/
        ├── tests/
        └── README.md
```

Каждый модуль — самодостаточен. Смотри [docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md).

## Запуск

```bash
pnpm --filter @antguru/api dev
```
