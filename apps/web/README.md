# @antguru/web

Клиентский сайт antguru.uz (Next.js 14, App Router).

## Структура

Feature-Sliced Design:

- `src/app/` — роуты (тонкие, только композиция)
- `src/widgets/` — крупные блоки страниц
- `src/features/` — бизнес-фичи
- `src/entities/` — бизнес-сущности
- `src/shared/` — ui-kit, api-client, utils

Правило импортов: `app → widgets → features → entities → shared`.

## Запуск

```bash
pnpm --filter @antguru/web dev
```
