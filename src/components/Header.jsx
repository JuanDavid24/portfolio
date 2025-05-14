export function Header() {
  return (
    <header className="sticky top-0 w-screen bg-gray-950 text-gray-50 opacity-100 z-50">
      <nav>
        <ul className="flex justify-center gap-3 py-5 opacity-100">
          <li className="my-1">
            <a
              className="p-5 border-2 border-gray-950 hover:border-teal-500 hover:text-teal-600 hover:size-1.5 duration-200 ease-in rounded-full"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li className="my-1">
            <a
              className="p-5 border-2 border-gray-950 hover:border-teal-500 hover:text-teal-600 hover:size-1.5 duration-200 ease-in rounded-full"
              href="#skills"
            >
              Habilidades
            </a>
          </li>
          <li className="my-1">
            <a
              className="p-5 border-2 border-gray-950 hover:border-teal-500 hover:text-teal-600 hover:size-1.5 duration-200 ease-in rounded-full"
              href="#projects"
            >
              Proyectos
            </a>
          </li>
          {/* <li className="my-1">
            <a
              className="p-5 border-2 border-gray-950 hover:border-teal-500 hover:text-teal-600 hover:size-1.5 duration-200 ease-in rounded-full"
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
