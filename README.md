# Проект: VideoCollector - авторизация, регистрация, контент, взаимодействие с сервером

Ссылка на PR: https://github.com/OrkhanRakhmetov/movies-explorer-frontend/pull/3
Ссылка на репо: https://github.com/OrkhanRakhmetov/movies-explorer-frontend
Ссылка на фронт сайта на сервере: numart.nomoredomains.work
Проверено по чек-листу.

Это фронтенд проекта

Конкретно в проекте использовались: функционал на React (CRA, Router, index.js для прокидывания компонентов, eslint), для стилей - SCSS (css-modules, файл vars.scss для общего доступа ко всем константам, миксинам и общим стилям).

Тут добавлены многие и многие фичи, некоторый допфункционал вроде лоадера, бургера и адаптивной версии форм.

`/components` — папка со всеми основными компонентами и их CSS
`/utils` — папка с дополнительными функциями
`/images` — все изображения для проекта
`/vendor` — файлы посторонних разрабов, в т.ч. шрифты

### Содержание

- Описание
- Нюансы
- Итог

**Описание**

Этот проект - полноценное веб-приложение для коллекционирования фильмов и размещения информации о них.
Он сделан по макету в Figma, сайт полностью адаптивен на разрешениях до 320px и даже ниже, выглядит хорошо на самых распространённых разрешениях экранов.

**Нюансы**

Здесь есть попапчики для взаимодействия, форма отправляется с данными, которые потом появляются на фронте.
Все очищается, есть валидация инпутов. Работает лоадер, есть бургер-меню, роутинг. В общем - это полноценный SPA.

**Итог**

Все проверено на ошибки, проверки по чек-листу пройдены, на низком старте к прохождению ревью.

## Available Scripts

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

Note: this is a one-way operation. Once you `eject`, you can't go back!\*\*
