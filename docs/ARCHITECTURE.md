# Архитектура

## Принципы

1. **Модульность превыше всего.** Каждый модуль — самодостаточная папка. Работа над одной фичей не требует чтения всего проекта.
2. **Строгая изоляция.** Бэкенд (NestJS) и фронтенд (Next.js) — отдельные приложения. Общаются через типизированный SDK.
3. **Единый источник правды для типов.** DTO и схемы валидации (Zod) описаны в `packages/types` и используются всеми приложениями.
4. **Feature-Sliced Design на фронте.** UI организован по фичам, а не по типам файлов.
5. **ADR для ключевых решений.** Любое решение, которое дорого переделывать — фиксируется в `docs/adr/`.

## Монорепо

Используется **Turborepo + pnpm workspaces**.

```
apps/            # деплоимые приложения
├── web/         # Next.js 14 (App Router) — клиентский сайт
├── admin/       # Next.js 14 — админ-панель
└── api/         # NestJS — REST API

packages/        # переиспользуемые библиотеки
├── db/          # Prisma schema + singleton клиента
├── types/       # TS-типы, DTO, Zod-схемы
├── ui/          # shadcn/ui компоненты
├── config/      # eslint/tsconfig/tailwind пресеты
└── sdk/         # типизированный клиент API
```

## Модули бэкенда (`apps/api/src/modules/`)

Каждый модуль — независимая папка с контроллером, сервисом, репозиторием, DTO и тестами.

| Модуль | Ответственность |
|---|---|
| `auth` | SMS-авторизация, JWT, сессии |
| `users` | профили, роли |
| `specialists` | анкеты специалистов, верификация |
| `categories` | дерево категорий услуг |
| `orders` | заявки клиентов, статусы |
| `responses` | отклики специалистов на заявки |
| `chat` | переписка клиент ↔ специалист |
| `reviews` | отзывы, рейтинги |
| `payments` | баланс, Payme, Click |
| `notifications` | SMS, push, email |
| `media` | загрузка файлов в S3 |
| `search` | фильтры, гео, Meilisearch |
| `admin` | модерация, аналитика |
| `common` | guards, interceptors, utils |

Структура модуля:
```
modules/orders/
├── orders.module.ts
├── orders.controller.ts
├── orders.service.ts
├── orders.repository.ts
├── dto/
├── tests/
└── README.md         # 10 строк: что делает, эндпоинты, зависимости
```

## Фронтенд (`apps/web/src/`)

Feature-Sliced Design:

```
src/
├── app/          # роуты Next.js (тонкие — только композиция)
├── widgets/      # крупные блоки страниц (header, footer, каталог)
├── features/     # бизнес-фичи (order-create, chat, auth-phone)
├── entities/     # бизнес-сущности (User, Order, Review)
└── shared/       # ui-kit, api-client, utils, конфиги
```

Правило импортов: слой может импортировать только из нижележащих (`app → widgets → features → entities → shared`).

## Роли пользователей

- **Клиент** — создаёт заказ, выбирает исполнителя, оставляет отзыв.
- **Специалист** — профиль, услуги, портфолио, отклики, баланс.
- **Админ** — модерация, категории, финансы, споры.

## Интеграции

- **SMS:** Eskiz.uz / Playmobile
- **Платежи:** Payme, Click
- **Файлы:** S3-совместимое хранилище (Backblaze B2)
- **Поиск:** Meilisearch
- **Очереди:** BullMQ + Redis
- **Локализация:** ru, uz (next-intl)
