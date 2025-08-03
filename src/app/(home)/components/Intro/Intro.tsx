import Image from "next/image"

export const Intro = () => {
  return(
    <div className="flex flex-col items-center justify-center h-[900px]">
      <Image
        className="absolute -z-1 top-0 left-0 w-full object-cover object-top" 
        src={`/main-bg.png`} 
        alt='main foto' 
        width={1920} 
        height={900} 
      />

      <h1 className="font-cormorant font-bold text-9xl/25  text-center">
        Окунись <br/> в мир <br/> воображения
      </h1>

    </div>
  )
}