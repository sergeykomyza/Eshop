import { PrismaClient } from "@prisma/client"

import Image from "next/image"
import { Button } from "./components/Button"

const prisma = new PrismaClient

export default async function Catalog() {
  const products = await prisma.product.findMany()
  console.log(products)
  return(
    <div className="pt-20 pl-8 pr-8">
      <h1 className="mb-13 text-3xl">Каталог</h1> 
      <div className="grid grid-cols-6 gap-3 pb-20">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col border-white border-1 rounded-[16px] overflow-hidden">
            <Image
              className="w-full h-[16.6vw] object-cover object-top rounded-[16px]" 
              src={item.foto || '/no_image.gif'} 
              alt='main foto' 
              width={300} 
              height={300} 
            />
            <div className="flex-1 flex flex-col p-5">
              <h6 className="mb-2 font-cormorant text-2xl/5">{item.name || 'Название фигурки в данный момент отсутствует'}</h6>
              <p className="mb-1 text-[14px]">{item.description || 'Описание отсутствует'}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-cormorant text-3xl">{item.price || 'Уточняйте у менеджера'} ₽</span>
                <Button />
              </div>
            </div>
          </div>
        ))} 
      </div> 
    </div>
  )
}