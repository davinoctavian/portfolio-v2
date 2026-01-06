import { NavLink } from "react-router";

export function Menu() {
  return (
    <nav>
      {resources.map(({ link, name }) => (
        <NavLink to={link}>{name}</NavLink>
      ))}
    </nav>
  );
}

const resources = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/profile",
    name: "Profile",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/project",
    name: "Project",
  },
  {
    link: "/cv",
    name: "CV",
  },
];
