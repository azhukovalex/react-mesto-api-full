# Проект Mesto фронтенд + бэкенд ( 12 - 15 практические работы)

## Описание

Проект "Mesto"  - интерактивный фотоальбом, куда можно добовлять карточки с фотографиями, просматривать их, ставить и удалять лайки. 
Данная работа является модификацией версии пректа, созданной на предыдущих спринтах обучения на курсе frontend-разработки в Яндекс.Практикум.

## Что нового:

# В 12-й проектной работе:
1. Создана файловая структура проекта для.
2. Настроена маршрутизация запросов.
3. Настроен линтер.

# В 13-й проектной работе:
1. Подключена MongoDB.
2. Созданы схемы и модели для пользователей и карточек.
3. Созданы контроллеры и роуты для пользователей и карточек:
  GET /users — возвращает всех пользователей
  GET /users/:userId - возвращает пользователя по _id
  POST /users — создаёт пользователя
  PATCH /users/me — обновляет профиль
  PATCH /users/me/avatar — обновляет аватар

  GET /cards — возвращает все карточки
  POST /cards — создаёт карточку
  DELETE /cards/:cardId — удаляет карточку по идентификатору 
  PATCH /users/me — обновляет профиль
  PATCH /users/me/avatar — обновляет аватар
  PUT /cards/:cardId/likes — поставить лайк карточке
  DELETE /cards/:cardId/likes — убрать лайк с карточки 

4. Реализовано временное решение авторизации.
5. Настроена передвача ошибок (400, 404, 500).

