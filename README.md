<h1>Интернет магазин на NEXT.JS + Typescript + Tailwind ! <br>
Пошагово и с нуля</h1>

<h3>1. Установим проект, зависимости, а также Prisma, для работы с БД</h3>
<b>npx create-next-app@latest</b> - Next + Typescript + Tailwind
<br>
<b>npm install @reduxjs/toolkit react-redux</b> - Redux Toolkit 
<br>
<b>npm insall sass</b> - Sass
<br>
<b>npm install prisma @prisma/client</b> - <a href="https://habr.com/ru/companies/timeweb/articles/654341/">Prisma</a>

<h3>2. Инициализируем Prisma</h3>
<b>- npx prisma init</b> (Это создаст папку prisma, в которой будет файл schema.prisma для настройки модели данных, а также файл .env для хранения переменных окружения, например, строки подключения к базе данных.)
<br>
<b>- Создадим модель товара</b> (у нас будут такие поля: foto, name, description, price)
<br>
В файле prisma/schema.prisma, пропишем
<br>
```
model Product {
  id          Int     @id @default(autoincrement())
  name        String
  description String
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

