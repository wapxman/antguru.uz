# @antguru/types

Общие TypeScript-типы и Zod-схемы. Единый источник правды для DTO между всеми приложениями.

## Принцип

Схема Zod → тип через `z.infer`. Одна схема даёт валидацию (runtime) и тип (compile-time).

```ts
import { UserSchema, type User } from '@antguru/types';
```
