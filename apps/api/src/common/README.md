# common

Базовый модуль для всех остальных. Глобальный (`@Global()`), подключается один раз в `AppModule`.

## Что даёт

- `PrismaService` — экземпляр Prisma Client с подключением/закрытием по жизненному циклу NestJS
- `RedisService` — обёртка над ioredis с helpers (`setWithTtl`, `get`, `del`, `incr`, `expire`)
- `CurrentUser()` — декоратор, достаёт распарсенный JWT-payload
- `Roles(...)` + `RolesGuard` — ограничение доступа по ролям
- `Public()` — помечает endpoint как открытый (JwtAuthGuard пропустит)
- `ZodValidationPipe(schema)` — валидация body/query/params через Zod
- `HttpExceptionFilter` — единый формат ошибок JSON
- `BigIntInterceptor` — сериализует BigInt → string на выходе

## Пример использования

```ts
@Controller('orders')
export class OrdersController {
  @Get()
  @Roles('CLIENT')
  list(@CurrentUser() user: AuthenticatedUser) { ... }

  @Post()
  create(
    @Body(new ZodValidationPipe(CreateOrderSchema)) dto: CreateOrderDto,
    @CurrentUser() user: AuthenticatedUser,
  ) { ... }
}
```
