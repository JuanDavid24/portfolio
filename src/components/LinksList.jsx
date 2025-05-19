import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../data/links";

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
