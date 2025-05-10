import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

export function LinksList() {
  return (
    <section>
      <ul className="flex flex-col sm:flex-row flex-wrap justify-center opacity-100 gap-2">
        <li>
          <LinkButton
            name="CV"
            url="https://drive.google.com/file/d/1r0g2vX3x4qj7b5k8c9m6l4f5z5z5z5z/view?usp=sharing"
            icon={faDownload}
          />
        </li>
        <li>
          <LinkButton
            name="GitHub"
            url="https://github.com/JuanDavid24"
            icon={faGithub}
          />
        </li>
        <li>
          <LinkButton
            name="LinkedIn"
            url="https://www.linkedin.com/in/juandavid24/"
            icon={faLinkedin}
          />
        </li>
        <li>
          <LinkButton
            name="Email"
            url="mailto:david.juan90.jd@gmail.com"
            icon={faEnvelope}
          />
        </li>
      </ul>
    </section>
  );
}

function LinkButton({ name, url, icon }) {
  return (
    <a
      className="flex flex-row items-center justify-center p-5 border-2 rounded-full border-cyan-600
          bg-gradient-to-tr from-blue-950 hover:border-teal-500 hover:brightness-150 hover:animate-pulsing
          duration-300 ease-in cursor-pointer group"
      href={url} 
      target="_blank"
    >
      <span>{name}</span>
      <FontAwesomeIcon
        className="h-8 w-8 fill-current text-zinc-100 group-hover:text-teal-600 duration-500"
        icon={icon}
      />
    </a>
  );
}
