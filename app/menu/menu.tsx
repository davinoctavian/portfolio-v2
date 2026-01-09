import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { Loading } from "../loading/loading";

export function Menu() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault(); // stop NavLink from navigating immediately
    setLoading(true);

    // wait for animation duration (e.g. 1s)
    setTimeout(() => {
      navigate(link);
      // navigate programmatically
    }, 1000);
  };

  return (
    <nav className="absolute inset-0 z-8 pointer-events-none">
      {resources.map(({ link, name, alias }) => {
        const animationDelay = Math.random() * 42;
        return (
          <div
            key={alias}
            className={`orbit ${alias} absolute top-1/2 left-1/2`}
            style={{ animationDelay: `-${animationDelay}s` }}
          >
            <NavLink
              to={link}
              className="planet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto"
              onClick={(e) => handleClick(e, link)}
            >
              <span className="planet-circle block rounded-full bg-center bg-cover shadow-[0_0_8px_rgba(255,255,255,0.35)]"></span>
              <span
                className="planet-label block mt-1 text-white text-xs whitespace-nowrap"
                style={{ animationDelay: `-${animationDelay}s` }}
              >
                {name}
              </span>
            </NavLink>
          </div>
        );
      })}
      {loading && <Loading />}
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
