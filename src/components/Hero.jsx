import characterPic from "../assets/jdev-dark.webp";
export function Hero() {
  return (
    <section id="hero" className="flex flex-col md:p-0 md:flex-row justify-center items-center text-balance">
      <img className=" sm:w-96 mask-x-from-55% mask-y-from-75%" src={characterPic} alt="" />
      <div className="flex flex-col gap-6 lg:p-12 p-6 text-center md:mt-0 -mt-28">
        <h1 className="text-4xl text-balance font-bold font-sans">Hola, soy <span className="text-6xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent tracking-wide opacity-75">Juan David</span></h1>
        <p className="text-2xl">Desarrollador de software con foco en desarrollo web fullstack, y estudiante avanzado de Ingeniería Informática. Actualmente trabajo en una tesis que combina API REST con generación procedural de mundos 3D y me estoy formando en backend con Node.js. También exploré el desarrollo de videojuegos con C++ y Unity. Busco seguir creciendo en el desarrollo de software combinando creatividad, lógica y tecnología.</p>
      </div>
    </section>
  )
}
