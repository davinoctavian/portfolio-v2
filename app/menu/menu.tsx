import { NavLink } from "react-router";
import "./menu.css";

export function Menu() {
  return (
    <nav className="solar-system">
      {resources.map(({ link, name, alias }) => {
        const animationDelay = Math.random() * 42;
        return (
          <div
            key={alias}
            className={`orbit ${alias}`}
            style={{ animationDelay: `-${animationDelay}s` }}
          >
            <NavLink to={link} className="planet">
              <span className="planet-circle"></span>
              <span
                className="planet-label"
                style={{ animationDelay: `-${animationDelay}s` }}
              >
                {name}
              </span>
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
}

const resources = [
  {
    link: "/profile",
    name: "Profile",
    alias: "mercury",
  },
  {
    link: "/about",
    name: "About",
    alias: "venus",
  },
  {
    link: "/",
    name: "Home",
    alias: "earth",
  },
  {
    link: "/project",
    name: "Project",
    alias: "mars",
  },
  {
    link: "/cv",
    name: "CV",
    alias: "jupiter",
  },
];
