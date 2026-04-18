# @antguru/db

Общий Prisma-клиент для всех приложений монорепо.

## Команды

```bash
pnpm --filter @antguru/db generate       # сгенерировать клиент
pnpm --filter @antguru/db migrate        # создать миграцию (dev)
pnpm --filter @antguru/db migrate:deploy # применить миграции (prod)
pnpm --filter @antguru/db studio         # Prisma Studio
```

## Использование

```ts
import { prisma } from '@antguru/db';

const users = await prisma.user.findMany();
```
