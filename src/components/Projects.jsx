import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { projectsData } from "../data/projects"
import { LinkButton } from "./LinksList"

export function Projects() {
  return (
    <section className="flex flex-col items-center" id="projects">
      <h2 className="text-2xl mb-6 text-center">Proyectos</h2>
      {/* <ProjectExpandedCard {...projectsData[0]} /> */}
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center align-top">
        {projectsData.map(project => (
          <li className="max-w-lg" key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ProjectCard({ name, description, images, tags }) {
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

function ProjectExpandedCard({ name, description, images, tags, repository, demo }) {
  return (
    <article className="flex lg:flex-row flex-col z-50 justify-between rounded-2xl border-2 w-full">
      <img className="width-full lg:max-w-2/3 aspect-video object-cover rounded-2xl" src={images[0]} alt={`imagen del proyecto ${name}`} />
      <div className="flex flex-col text-center gap-2 justify-evenly items-center p-2">
        <h3 className="text-2xl">{name}</h3>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2 justify-center">
          {tags.map(tag => (
            <li> 
              <Tag text={tag} color="teal-800" /> 
            </li>
            ))}
        </ul>
        <ul className="flex gap-2 mt-4 lg:mt-0">
          {repository && <li><LinkButton name="Repositorio" url={repository} icon={faGithub}/></li>}
          {demo && <li><LinkButton name="Demo" url={demo} /></li>}
        </ul>
      </div>
    </article>
  )
}

function Tag({ text, color }) {
  return(
    <span className="text-teal-400 border-teal-400 border-2 rounded-2xl p-1">{text}</span>
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

