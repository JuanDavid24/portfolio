import { LinkButton } from "./LinksList";
import { links } from "./LinksList";

export function Footer() {
  return (
    <footer className="relative w-full mt-16">
      <ul className="flex gap-2 justify-center py-16 bg-gray-950">
        {links.map((link) => (
          <li>
            <LinkButton
              url={link.url}
              icon={{ iconName: link.iconName, iconSize: "2xl" }}
            />        
          </li>
        ))}
      </ul>
    </footer>
  );
}
