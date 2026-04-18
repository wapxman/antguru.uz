# auth

SMS-код → JWT. Пользователь вводит телефон → получает код в SMS → вводит код → получает access+refresh токены.

## Эндпоинты (все `@Public()`)

| Метод | Путь | Боди | Ответ |
|---|---|---|---|
| POST | `/api/auth/send-code` | `{ phone }` | `{ sentAt, cooldownSec }` |
| POST | `/api/auth/verify-code` | `{ phone, code }` | `{ accessToken, refreshToken, user }` |
| POST | `/api/auth/refresh` | `{ refreshToken }` | `{ accessToken, refreshToken, user }` |
| GET | `/api/auth/me` | — (Bearer) | текущий пользователь + profile |

## Логика безопасности

- **Cooldown:** 60 сек между отправками кода на один номер (429).
- **TTL кода:** 5 мин.
- **Блок:** 5 неверных попыток → 15-минутный блок на этот номер.
- **JWT:** access 7 дн, refresh 30 дн (разные секреты).

## Dev-режим

Если `ESKIZ_EMAIL`/`ESKIZ_PASSWORD` свободны — SMS не отправляется, код печатается в лог.
Если задан `DEV_OTP_CODE=0000` и `NODE_ENV !== production` — всегда используется этот код (удобно для тестов).

## Формат JWT payload

```ts
{ sub: string; phone: string; roles: UserRole[] }
```

## Глобальные guards

Модуль регистрирует `JwtAuthGuard` и `RolesGuard` через `APP_GUARD`. По умолчанию все endpoints требуют авторизации. Открытые помечаем `@Public()`.
