import { projectsData } from "../data/projects"
export function Projects() {
  return (
    <section>
      <h2>Proyectos</h2>
      <ul>
        {projectsData.map( project => (
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
    <article className="project-card">
      <img src={images[0]} alt={`image 1 of project ${name}`} />
      <div className="project-card__body">
        <h3>{name}</h3>
        <div className="project-card__description">{description}</div>
        <div className="project-card__tags">
          {tags.map(tag => <span>{tag}</span>)}
        </div>
      </div>
      <div className="project-card__footer">
        <a href="www.github.com">Github</a>
        <a href="www.project.com">Demo</a>
      </div>
    </article>
  )
}