import { projectsData } from "../data/projects"
export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl mb-6">Proyectos</h2>
      <ul className="flex flex-col gap-4">
        {projectsData.map(project => (
          <li>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProjectCard({ name, description, images, tags }) {
  return (
    <article className="min-h-50 project-card flex flex-col md:flex-row md:p-0 border-1 rounded-2xl">
      <img className="md:w-60 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none object-cover" src={images[0]} alt={`image 1 of project ${name}`} />
      <div className="project-card__body flex flex-col gap-2 justify-around md:px-4 md:pb-4 px-2 pb-2">
        <h3 className="text-xl">{name}</h3>
        <div className="project-card__description">{description}</div>
        <div className="project-card__tags">
          {tags.map(tag => <span>{tag}</span>)}
        </div>
        <div className="project-card__footer">
          <a href="www.github.com">Github</a>
          <a href="www.project.com">Demo</a>
        </div>
      </div>

    </article>
  )
}