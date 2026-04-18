# Roadmap antguru.uz

Живой статус работ. Вычёркиваем по мере сдачи.

## Статус иконок

- ✅ готово
- 🚧 в работе
- ⏳ ждём внешнюю зависимость (аккаунт, договор)
- ⬜ не начато

## Фаза 0 — база (закрыто)

- ✅ Скелет монорепо (Turborepo + npm workspaces)
- ✅ Документация (ARCHITECTURE, STACK, ADR 0001–0004)
- ✅ Prisma-схема БД (User, SpecialistProfile, Category, Order, Response, Review, Chat, Payment)
- ✅ Zod-типы в `@antguru/types`
- ✅ Деплой `apps/web` на Vercel
- ✅ Вёрстка главной (Tailwind + 7 виджетов)

## Фаза 1 — инфраструктура

- ⏳ Postgres в облаке (Neon) — требует аккаунта пользователя
- ⏳ Redis (Upstash) — требует аккаунта
- ⬜ Применение Prisma-миграций (после Postgres)
- ✅ Сидер категорий (ru + uz, 12 рубрик × 3–8 подкатегорий)
- ⏳ Деплой `apps/api` (Railway) — требует аккаунта
- ✅ ESLint + Prettier пресеты в `@antguru/config` (base/next/nest)
- ✅ `.env.example` файлы (api, web, admin)

## Фаза 2 — аутентификация и пользователи

- ✅ API: модуль `common` (PrismaService, RedisService, guards, decorators, ZodValidationPipe, HttpExceptionFilter, BigIntInterceptor)
- ✅ API: модуль `auth` (SMS OTP через Eskiz с dev-fallback, JWT access+refresh, cooldown/блокировка, глобальные guards)
- ⬜ API: модуль `users` (профиль CRUD, аватар)
- ⬜ API: модуль `specialists` (активация профиля, верификация)
- ⬜ Web: `/login`, `/register` страницы + middleware
- ⬜ Web: защита маршрутов

## Фаза 3 — ядро маркетплейса

- ⬜ API: `categories` (CRUD дерева)
- ⬜ API: `orders` (создание, лента, статусы)
- ⬜ API: `responses` (отклик + списание feeMinor)
- ⬜ API: `reviews` (двунаправленные + пересчёт рейтинга)
- ⬜ API: `chat` (WebSocket + ChatThread)
- ⬜ Web: создание заказа (multi-step)
- ⬜ Web: страница заказа + чат
- ⬜ Web: каталог, карточка специалиста
- ⬜ Web: профиль клиента / специалиста

## Фаза 4 — платежи и коммуникации

- ⬜ API: `payments` (Payme + Click webhooks, баланс, вывод)
- ⏳ Merchant-аккаунты Payme/Click (юрлицо)
- ⬜ API: `notifications` (SMS + push)
- ⬜ API: `media` (S3 загрузка + presigned URL)
- ⬜ API: `search` (Meilisearch)
- ⬜ BullMQ очереди

## Фаза 5 — админка

- ⬜ `apps/admin`: Tailwind + layout
- ⬜ Дашборд с KPI
- ⬜ CRUD категорий, модерация, пользователи, заказы, платежи, отзывы

## Фаза 6 — продакшен-готовность

- ⬜ i18n (next-intl, ru/uz)
- ⬜ SEO (metadata, sitemap, robots)
- ⬜ Аналитика (Plausible / PostHog)
- ⬜ Тесты (Jest unit + Playwright e2e)
- ⬜ Мониторинг (Sentry)
- ⬜ CI (GitHub Actions)
- ⬜ Pino логирование

## Фаза 7 — запуск (бизнес)

- ⏳ Merchant аккаунты Payme/Click
- ⬜ Пользовательское соглашение / PP / оферта
- ⬜ Регламент модерации и споров
- ⬜ Backup БД
- ⬜ Домен antguru.uz → Vercel
