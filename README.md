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
Мы будем использовать базу данных типа <b>sqlite.</b> Наш файл schema.prisma будет выглядеть так - 

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Product {
  id          Int     @id @default(autoincrement())
  foto        String
  name        String
  description String
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

А файл .env будет выглядеть так - 

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# The following `prisma+postgres` URL is similar to the URL produced by running a local Prisma Postgres 
# server with the `prisma dev` CLI command, when not choosing any non-default ports or settings. The API key, unlike the 
# one found in a remote Prisma Postgres URL, does not contain any sensitive information.

DATABASE_URL="file:./dev.db"
```

<br>
<b>- Создадим модель товара</b> (у нас будут такие поля: foto, name, description, price)
<br>
В файле prisma/schema.prisma, пропишем

```
model Product {
  id          Int     @id @default(autoincrement())
  foto        String
  name        String
  description String
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

<b>- npx prisma migrate dev --name init</b> (Это создаст таблицу в БД, с теми полями, которые мы прописали)
<br>
<b>- npx prisma studio</b>  (Запускаем Prisma и заполняем таблицу товарами)

<h3>3. Запускаем проект</h3>
<b>npm run dev</b> - команда запуска проекта

<h4>Cтруктура проекта может быть абсолютно любая, и зависеть от индивидуальных особенностей проекта, поэтому здесь мы не будем заострять внимание на расположении компонентов. Здесь нас интересует конкретно логика интернет магазина</h4>

<h3>4. Создадим страницу Каталога, где выведем товары, которые мы добавили в БД в Prisma</h3>

Для начала выведем в консоль содержимое нашей БД, чтобы убедиться, что все работает как надо.
<br>
Получить товары, которые мы находятся в нашей БД в Prisma, можно таким образом -
<br>
`const products = await prisma.product.findMany()`
<br>
Если вывести на странице лог этих товаров - `console.log(products)`, мы должны в увидеть в консоли json список из товаров, которые мы добавили. Если список есть, значит все ок. Теперь можно замапить товары.
<br>

```
{products.map((item) => (
  <div key={item.id} className="border-white border-1 rounded-[16px] overflow-hidden">
    <Image
      className="w-full h-[16.6vw] object-cover object-top rounded-[16px]" 
      src={item.foto || '/no_image.gif'} 
      alt='main foto' 
      width={300} 
      height={300} 
    />
    <div className="p-5">
      <h6 className="mb-2 font-cormorant text-2xl">{item.name || 'Название фигурки в данный момент отсутствует'}</h6>
      <p className="mb-1 text-[14px]">{item.description || 'Описание отсутствует'}</p>
      <div className="text-right">
        <span className="font-cormorant text-3xl">{item.price || 'Уточняйте у менеджера'} ₽</span>
        <Button />
      </div>
    </div>
  </div>
))} 
```

<h4>Здесь нужно обратить внимание, что Typescript не требует типизации товаров, которые мы создали, т.к Prisma генерирует типы автоматически.</h4>

После этого может возникнуть такая проблема: 

<img width="1040" height="307" alt="Screenshot_1" src="https://github.com/user-attachments/assets/ebc29a3a-1e0c-4826-bf5d-fa5abe597830" />

урл на этом скрине, это адрес изображения первого товара в нашей БД, и эта ошибка означает что вы используете компонент next/image из Next.js, но передаёте в него изображение с внешнего домена (https://ir-8.ozone.ru/...), который не добавлен в список разрешённых доменов в вашем next.config.js.
<br>
Компонент next/image (Image) требует, чтобы все внешние изображения загружались только с предварительно разрешённых доменов, для безопасности и оптимизации изображений на стороне сервера.
<br>
Решить эту проблему можно добавив домен изображения в список разрешенных в вашем next.config.js. Вот так: 

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ir-8.ozone.ru',
      },
      {
        protocol: 'https',
        hostname: 'static.insales-cdn.com',
      }
      ... и дальше
    ],
  },
};

export default nextConfig;

```

После этого товары отобразятся как надо





