# Учебный проект «Pink» от [HTML Academy](https://htmlacademy.ru/)

* Верстка: [Кирилл Скорописцев](https://htmlacademy.ru/profile/id1530953)
* Наставник: [Виталя Игошин](https://htmlacademy.ru/profile/id353627)

--- 

## Описание проекта
```
Сайт для раскрашивания серых будней в розовый цвет "Pink".

Технические особенности:
1. Адаптивность вёрстки: мобильная, планшетная и десктопная версии («резина»).
2. Адаптивность графики: ретинизация, векторные изображения.
3. Используемая методология: БЭМ.
4. Используемый препроцессор: Less.
5. Используемый инструмент автоматизации: Gulp.
6. Используемые фреймворки: нет.
7. Кроссбраузерность: Chrome, Firefox.
```
---

## Как использовать

`npm install` - установка зависимостей.

`npm start` - сборка проекта в режиме разработки и запуск локального сервера.

`npm run build` - финальная сборка проекта.

`npm test` - запуск теста на наличие стилистических ошибок.

---

## Структура проекта

```bash
.
├── source/                   # каталог для размещения исходных файлов проекта
│   ├── fonts/                # каталог шрифтов
│   ├── img/                  # каталог растровых и векторных изображений
│   │   ├── favicon/          # каталог растровых и векторных изображений для фавиконок
│   │   └── icons/            # каталог векторных изображений для создания спрайта
│   ├── js/                   # каталог JS файлов
│   ├── less/                 # каталог для размещения файлов стилей .less
│   │   ├── blocks/           # каталог файлов стилей .less
│   │   ├── global/           # каталог файлов стилей .less
│   │   └── style.less/       # файл подключения стилей .less
│   ├── catalog.html          # файл разметки страницы каталога
│   ├── favicon.ico           # файл фавиконка
│   ├── form.html             # файл разметки страницы формы
│   ├── index.html            # файл разметки главной страницы
│   └── manifest.webmanifest  # файл выбора фавиконок
├── .editorconfig             # файл конфигурации настроек редактора
├── .gitattributes            # файл атрибутов Git
├── .gitignore                # файл исключений Git
├── .stylelintrc              # файл конфигурации stylelint
├── Readme.md                 # документация проекта
├── Specification.md          # техническое задание
├── gulpfile.js               # каталог задач для Gulp
├── package-lock.json         # lock-файл npm
└── package.json              # файл npm зависимостей и настроек проекта
```
