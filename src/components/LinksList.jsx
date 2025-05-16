import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    text: "CV",
    url: "https://drive.google.com/file/d/1r0g2vX3x4qj7b5k8c9m6l4f5z5z5z5z/view?usp=sharing",
    iconName: faDownload,
  },
  {
    text: "GitHub",
    url: "https://github.com/JuanDavid24",
    iconName: faGithub,
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/juandavid24/",
    iconName: faLinkedin,
  },
  {
    text: "Email",
    url: "mailto:david.juan90.jd@gmail.com",
    iconName: faEnvelope,
  },
];

export function LinksList() {
  return (
    <section>
      <ul className="flex flex-col sm:flex-row flex-wrap justify-center opacity-100 gap-2">
        {links.map((link) => (
          <li>
            <LinkButton
              text={link.text}
              url={link.url}
              icon={{ iconName: link.iconName, iconSize: "xl" }}
            />        
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LinkButton({ text, url, icon }) {
  const { iconName, iconSize } = icon || null
  return (
    <a
      className="flex flex-row items-center justify-center p-5 border-2 rounded-full border-cyan-600
          bg-gradient-to-tr from-blue-950 to-teal-950 hover:border-teal-500 hover:brightness-150 hover:animate-pulsing
          duration-300 ease-in cursor-pointer group"
      href={url}    
      target="_blank"
    >
      {text && <span>{text}</span>}
      {icon && (
        <FontAwesomeIcon
          className={`h-8 w-8 fill-current ${iconSize && `text-${iconSize}`} text-zinc-100 group-hover:text-teal-600 duration-500`}
          icon={iconName}
        />
      )}
    </a>
  );
}
