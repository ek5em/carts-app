# CartManager

SPA-приложение для просмотра и редактирования корзин пользователей на основе публичного API [DummyJSON](https://dummyjson.com/docs/carts).

## Стек

- **React 19** + **Vite** + **TypeScript**
- **@tanstack/react-query** — серверный стейт, кеширование, мутации
- **Zustand** — глобальный клиентский стейт (пагинация, фильтр)
- **@emotion/styled** — CSS-in-JS стилизация
- **react-router-dom v6** — маршрутизация
- **axios** — HTTP-клиент

---

## Запуск

### Требования

- Node.js >= 18
- npm >= 9

### Установка и запуск в режиме разработки

```bash
git clone https://github.com/ek5em/carts-app.git
cd carts-app
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

### Сборка для продакшна

```bash
npm run build
```

Артефакты попадут в папку `dist/`.

### Проверка типов

```bash
npx tsc --noEmit
```

---

## Архитектура

Проект разбит на слои: `api` — запросы и типы, `store` — глобальный стейт, `hooks` — React Query хуки, `components` — переиспользуемые компоненты, `pages` — страницы.

Каждый компонент разделён на два файла: `Component.tsx` (логика и JSX) и `Component.styles.ts` (styled-компоненты).

Состояние пагинации и фильтра живёт в Zustand и сохраняется при навигации между страницами. React Query отвечает за кеширование данных с сервера — после редактирования корзины кеш инвалидируется и список обновляется автоматически.
