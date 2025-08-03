import Link from "next/link"


export const Header = () => {
  return(
    <header className="absolute z-10 top-0 left-0 w-full pt-2 pb-2 border-b-1 border-white">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link className="font-bitcountPropDouble text-4xl" href="/">
            DarkFigures
          </Link>
          <ul className="flex items-center gap-2 ml-auto">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/about">О нас</Link></li>
          </ul>
          
        </nav>
      </div>
    </header>
  )
}