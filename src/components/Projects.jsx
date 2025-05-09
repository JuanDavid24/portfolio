import { projectsData } from "../data/projects"

export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl mb-6 text-center">Proyectos</h2>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center align-top">
        {projectsData.map(project => (
          <li className="max-w-lg ">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProjectCard({ name, description, images, tags }) {
  return (
    <article className="relative border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden 
      hover:animate-squeeze hover:scale-125 hover:z-10 hover:shadow-teal-800 hover:shadow-lg duration-150 delay-150 animate-duration-faster animate-ease-in-out">
      <a href="#">
        <img className="h-100 object-cover saturate-40 hover:saturate-100 duration-150" src={images[0]} alt={`image 1 of project ${name}`} />
      </a>
      <h3 className="text-lg text-center py-2">{name}</h3>
    </article>
  )
}

//TODO: modal
// function ProjectModal({ name, description, images, tags }) {
//   return (
//     <article className="min-h-50 project-card flex flex-col md:flex-row md:p-0 border-1 rounded-2xl">
//       <img className="md:w-60 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none object-cover" src={images[0]} alt={`image 1 of project ${name}`} />
//       <div className="project-card__body flex flex-col gap-2 justify-around md:px-4 md:pb-4 px-2 pb-2">
//         <h3 className="text-xl">{name}</h3>
//         <div className="project-card__description">{description}</div>
//         <ul className="project-card__tags flex flex-row flex-wrap gap-x-1 gap-y-3">
//           {tags.map(tag =>
//             <li>
//               <Tag text={tag} />
//             </li>)}
//         </ul>
//         <div className="project-card__footer">
//           <a href="www.github.com">Github</a>
//           <a href="www.project.com">Demo</a>
//         </div>
//       </div>
//     </article>
//   )
// }

function Tag({ text }) {
  return (
    <span className="border-2 rounded-3xl py-1 px-2 text-emerald-700">{text}</span>
  )
}