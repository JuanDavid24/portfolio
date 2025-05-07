import controlClientes1 from "../assets/projects/control-clientes-1.png";
import controlClientes2 from "../assets/projects/control-clientes-2.png";
import controlClientes3 from "../assets/projects/control-clientes-3.png";
import controlClientes4 from "../assets/projects/control-clientes-4.png";
import fateCharacters1 from "../assets/projects/fate-characters-1.png";
import fateCharacters2 from "../assets/projects/fate-characters-2.png";
import fateCharacters3 from "../assets/projects/fate-characters-3.png";
import funkoshop1 from "../assets/projects/funkoshop-1.png";
import funkoshop2 from "../assets/projects/funkoshop-2.png";
import funkoshop3 from "../assets/projects/funkoshop-3.png";
import funkoshop4 from "../assets/projects/funkoshop-4.png";
import funkoshop5 from "../assets/projects/funkoshop-5.png";
import funkoshop6 from "../assets/projects/funkoshop-6.png";
import pacman1 from "../assets/projects/pacman-1.png";
import pacman2 from "../assets/projects/pacman-2.png";
import taTeTi1 from "../assets/projects/ta-te-ti-1.png";
import taTeTi2 from "../assets/projects/ta-te-ti-2.png";
import buscadorPeliculas1 from "../assets/projects/buscador-peliculas-1.png";

export const projectsData = [
  {
    name: "Control Clientes",
    description: "Aplicación web que lista clientes y sus respectivos saldos, permitiendo alta, baja y modificación de los mismos. Cuenta con manejo de usuarios: registro, login, sesiones y permisos basados en roles.",
    tags: ["Angular", "Firebase", "Firestore", "Bootstrap 5", "CSS", "Fullstack"],
    images: [controlClientes1, controlClientes2, controlClientes3, controlClientes4]
  },
  {
    name: "Funkoshop",
    description: "Tienda online de Funkos. Cuenta con secciones públicas que permiten ver el catálogo de productos, filtrar, buscar y agregar los mismos al carrito. Las vistas de admin requieren autenticación de usuario y desde allí se puede agregar, editar y eliminar items del stock.",
    tags: ["Node.js", "Express", "Javascript", "EJS", "CSS", "Fullstack"],
    images: [funkoshop1, funkoshop2, funkoshop3, funkoshop4, funkoshop5, funkoshop6]
  },
  {
    name: "Buscador de películas",
    description: "Un simple buscador que consume una API y muestra los resultados de las películas ordenados en distintos criterios. Incluye actualización dinámica de los resultados en base al input del en cada momento.",
    tags: ["React", "CSS", "Front-end"],
    images: [buscadorPeliculas1]
  },
  {
    name: "Fate characters",
    description: "página con diseño responsive y varias secciones, incluyendo una galería de imágenes organizadas en tarjetas, tablas con datos, formulario de registro presentado en un modal, entre otros recursos. La temática está inspirada en una famosa serie animada",
    tags: ["Angular", "Firebase", "Firestore", "Bootstrap 5", "Front-end"],
    images: [fateCharacters1, fateCharacters2, fateCharacters3]
  },
  {
    name: "Pacman",
    description: "Proyecto individual de desarrollo de un nivel del clásico videojuego.",
    tags: ["C++", "Game dev", "Allegro"],
    images: [pacman1, pacman2]
  },
  {
    name: "Ta te ti",
    description: "Implementación del famoso juego en un entorno web.",
    tags: ["React", "CSS", "Game dev", "Front-end"],
    images: [taTeTi1, taTeTi2]
  }
]