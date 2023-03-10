# Виджет погоды

Этот виджет позволяет получать информацию о погоде:

- В любом городе по запросу;

- По текущей геолокации пользователя.

Также пользователь может выбрать, на какой период он хочет узнать погоду:

- На текущее время;

- На ближайшие 5 дней.

Все данные о погоде собираются из [OpenWeatherMap](https://openweathermap.org/) по API.\
Посмотреть виджет в деле можно [тут](https://thrashches.github.io/weather-widget-react).

## Доступные действия

Перед запуском или сборкой проекта в корне необходимо создать файл ```.env.local```, и заполнить его следующим образом:
```
REACT_APP_API_KEY=<Ваш API-ключ>
```



В папке с проектом можно выполнить:
#
```bash
yarn start
```

Запуск приложения в режиме dev-сервера.\
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

#
```bash
yarn test
```

Для запуска тестов.\
Подробнее можно узнать в [документации](https://facebook.github.io/create-react-app/docs/running-tests).
#
```bash
yarn build
```

Сборка приложения в папку `build`.\
Сборка производится с необходимыми минификациями и оптимизациями.\
Приложение будет готово для деплоя.\
Подробнее можно узнать в [документации](https://facebook.github.io/create-react-app/docs/deployment).

#
```bash
yarn deploy
```

Сборка приложения в папку `build`, с последующим деплоем в ```GitHub pages```.

#
```bash
yarn eject
```

**Note: После запуска команды eject невозможно будет запустить ее снова, так как будут доступны все сценарии, кроме одного eject . Используйте эту команду, только если вам нужно. В противном случае придерживайтесь конфигурации по умолчанию. Во всяком случае, так будет лучше.**

`create-react-app` поставляется с отличной конфигурацией и помогает создавать приложение React с учетом передовых методов его оптимизации. Однако запуск сценария eject удалит единственную зависимость сборки из вашего проекта. Это означает, что он скопирует файлы конфигурации и транзитивные зависимости (например, Webpack, Babel и т. д.) как зависимости в файле package.json . Если вы сделаете это, вы должны будете убедиться, что зависимости установлены перед созданием вашего проекта.
