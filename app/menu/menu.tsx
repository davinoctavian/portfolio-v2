import { NavLink } from "react-router";
import { useState } from "react";
import "./menu.css";

export function Menu() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

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
            <NavLink to={link} className="planet" onClick={handleClick}>
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
      {loading && (
        <div className="warp-overlay">
          {Array.from({ length: 80 }).map((_, i) => {
            const angle = Math.floor(Math.random() * 360) + "deg";
            return (
              <div
                key={i}
                className="warp-star"
                style={{ ["--angle" as any]: angle }}
              />
            );
          })}
        </div>
      )}
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
