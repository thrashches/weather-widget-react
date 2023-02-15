interface AppConfig {
  API_KEY: string; // Ключ от API
  REQUEST_TIMEOUT: number; // Задержка перед отправкой запроса к API
}

/**
 * Конфигурация приложения
 */
const config: AppConfig = {
  API_KEY: "49b8785c49a510159343b52e91604bde",
  REQUEST_TIMEOUT: 1000,
};

export default config;
