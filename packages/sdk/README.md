# @antguru/sdk

Типизированный клиент для вызовов API из web/admin.

```ts
import { createApiClient } from '@antguru/sdk';

const api = createApiClient({ baseUrl: 'http://localhost:4000/api' });
const h = await api.health();
```
