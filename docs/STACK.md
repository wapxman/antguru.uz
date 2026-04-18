# Технологический стек

## Общее

| Слой | Технология | Почему |
|---|---|---|
| Монорепо | Turborepo + pnpm | кеш сборок, workspace-зависимости |
| Язык | TypeScript 5+ | строгая типизация везде |
| Валидация | Zod | типы + валидация из одной схемы |
| Линтер/форматтер | ESLint + Prettier | стандарт |

## Backend (`apps/api`)

| | Технология |
|---|---|
| Фреймворк | NestJS 10 |
| ORM | Prisma |
| БД | PostgreSQL 16 |
| Кеш/очереди | Redis + BullMQ |
| Поиск | Meilisearch |
| Auth | JWT + SMS (Eskiz.uz) |
| Файлы | S3 (Backblaze B2) |
| Платежи | Payme, Click |

## Frontend (`apps/web`, `apps/admin`)

| | Технология |
|---|---|
| Фреймворк | Next.js 14 (App Router) |
| Стили | Tailwind CSS |
| UI-кит | shadcn/ui |
| Состояние | Zustand + TanStack Query |
| Формы | react-hook-form + Zod |
| i18n | next-intl (ru, uz) |

## Деплой

| | Где |
|---|---|
| Web / Admin | Vercel |
| API | Railway / VPS |
| БД | Neon / Supabase |
| Redis | Upstash |
| S3 | Backblaze B2 |
