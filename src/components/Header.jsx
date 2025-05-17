export function Header() {
  return (
    <header className="sticky top-0 w-full z-50 font-[silkscreen] tracking-wide">
      <nav>
        <ul className="flex justify-center gap-3 py-5 box-content">
          <li className="my-1">
            <a
              className="p-5 hover:border-b-3 hover:border-pink-500 hover:shadow-md
              hover:text-pink-500 hover:px-12 drop-shadow-xl hover:drop-shadow-rose-900 hover:text-shadow-indigo-300
                hover:text-shadow-xs duration-300 ease-in"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li className="my-1">
            <a
              className="p-5 hover:border-b-3 hover:border-pink-500 hover:shadow-md
              hover:text-pink-500 hover:px-12 drop-shadow-xl hover:drop-shadow-rose-900 hover:text-shadow-indigo-300 
                hover:text-shadow-xs duration-300 ease-in"
              href="#skills"
            >
              Habilidades
            </a>
          </li>
          <li className="my-1">
            <a
              className="p-5 hover:border-b-3 hover:border-pink-500 hover:shadow-md
              hover:text-pink-500 hover:px-12 drop-shadow-xl hover:drop-shadow-rose-900 hover:text-shadow-indigo-300 
                hover:text-shadow-xs duration-300 ease-in"
              href="#projects"
            >
              Proyectos
            </a>
          </li>
          {/* <li className="my-1">
            <a
              className="p-5 hover:border-2 hover:border-teal-500 hover:taxt-teal-500 hover:size-1.5 duration-200 ease-in rounded-full"
              href="#contact"
            >
              Contacto
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
