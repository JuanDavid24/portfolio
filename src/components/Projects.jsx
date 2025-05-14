import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "../data/projects";
import { LinkButton } from "./LinksList";
import { Modal } from "./Modal";
import PictureSlider from "./Slider";
import Slider from "react-slick";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  return (
    <section className="flex flex-col items-center scroll-mt-20" id="projects">
      <h2 className="text-2xl mb-6 text-center">Proyectos</h2>
      {/* <ProjectExpandedCard {...projectsData[0]} /> */}
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center align-top">
        {projectsData.map((project) => (
          <li className="max-w-lg" key={project.name}>
            <MiniProjectCard project={project} handleClick={handleOpenModal} />
          </li>
        ))}
      </ul>
      {selectedProject && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <ProjectCard project={selectedProject} />
        </Modal>
      )}
    </section>
  );
}

export function MiniProjectCard({ project, handleClick }) {
  const { name, images } = project;
  return (
    <article
      className="relative border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer
      hover:animate-squeeze hover:scale-125 hover:z-10 hover:shadow-teal-800 hover:shadow-lg duration-150 delay-150 animate-duration-faster animate-ease-in-out"
    >
      <a onClick={() => handleClick(project)}>
        <img
          className="h-100 object-cover saturate-40 hover:saturate-100 duration-150"
          src={images[0]}
          alt={`image 1 of project ${name}`}
        />
      </a>
      <h3 className="text-lg text-center py-2">{name}</h3>
    </article>
  );
}

function ProjectCard({ project }) {
  const { name, description, images, tags, repository, demo } = project;
  return (
    <article className="flex lg:flex-row flex-col z-50 rounded-2xl border-2 w-full">
      <div className="lg:max-w-2/3 ">
        {images.length > 1 ? (
          <PictureSlider>
            {images.map((image, index) => (
              <img
                className="w-full aspect-video object-cover rounded-2xl"
                src={image}
                alt={`imagen ${index} del proyecto ${name}`}
              />
            ))}
          </PictureSlider>
        ) : (
          <img
            className="w-full aspect-video object-cover rounded-2xl"
            src={images[0]}
            alt={`imagen del proyecto ${name}`}
          />
        )}
      </div>
      <div className="flex flex-col text-center gap-2 mx-auto justify-evenly items-center p-2">
        <h3 className="text-2xl">{name}</h3>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <li>
              <Tag text={tag} color="teal-800" />
            </li>
          ))}
        </ul>
        <ul className="flex gap-2 mt-4 lg:mt-0">
          {repository && (
            <li>
              <LinkButton
                text="Repositorio"
                url={repository}
                icon={{ iconName: faGithub, iconSize: "xl" }}
              />
            </li>
          )}
          {demo && (
            <li>
              <LinkButton
                text="Demo"
                url={demo}
                icon={{ iconName: faArrowUpRightFromSquare, iconSize: "xl" }}
              />
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}

function Tag({ text, color }) {
  return (
    <span className="text-teal-400 border-teal-400 border-2 rounded-2xl p-1">
      {text}
    </span>
  );
}
