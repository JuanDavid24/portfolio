import { LinkButton } from "./LinksList";
import { links } from "./LinksList";

export function Footer() {
  return (
    <footer className="relative w-full mt-16 py-12 flex flex-col gap-12 text-center bg-gray-950">
      <ul className="flex gap-2 justify-center">
        {links.map((link) => (
          <li>
            <LinkButton
              url={link.url}
              icon={{ iconName: link.iconName, iconSize: "2xl" }}
            />        
          </li>
        ))}
      </ul>
      <p>&copy;JDev - 2025</p>
    </footer>
  );
}
