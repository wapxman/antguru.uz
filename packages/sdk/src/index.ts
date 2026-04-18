// Типизированный клиент API для использования из web/admin.
// Вызывает бэкенд (@antguru/api), валидирует ответы схемами из @antguru/types.

export type ApiClientConfig = {
  baseUrl: string;
  getAuthToken?: () => string | null | undefined;
};

export function createApiClient(config: ApiClientConfig) {
  return {
    async health(): Promise<{ status: string; service: string }> {
      const res = await fetch(`${config.baseUrl}/health`);
      if (!res.ok) throw new Error(`Health check failed: ${res.status}`);
      return res.json();
    },
  };
}

export type ApiClient = ReturnType<typeof createApiClient>;
