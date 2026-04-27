import { NavLink, useNavigate, useNavigation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Loading } from "../loading/loading";

const resources = [
  { link: "/profile", name: "Profile", alias: "mercury" },
  { link: "/about", name: "About", alias: "venus" },
  { link: "/", name: "Home", alias: "earth" },
  { link: "/project", name: "Project", alias: "mars" },
  { link: "/cv", name: "CV", alias: "jupiter" },
] as const;

const ANIMATION_DELAYS = resources.map((_, i) => `${-(i * 8.4).toFixed(1)}s`);

type OverlayPhase = "in" | "waiting" | "out" | "done";

export function Menu() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [phase, setPhase] = useState<OverlayPhase>("done");
  const pendingLink = useRef<string | null>(null);

  const handleClick = (_e: React.MouseEvent, link: string) => {
    if (phase !== "done") return; // prevent double-click
    pendingLink.current = link;
    setPhase("in");
  };

  // When "in" animation finishes → actually navigate
  const handleInDone = () => {
    setPhase("waiting");
    if (pendingLink.current) {
      navigate(pendingLink.current);
    }
  };

  // Watch React Router's navigation state.
  // When the new page is fully loaded (idle), start the "out" fade.
  useEffect(() => {
    if (phase === "waiting" && navigation.state === "idle") {
      setPhase("out");
    }
  }, [navigation.state, phase]);

  const handleOutDone = () => {
    setPhase("done");
    pendingLink.current = null;
  };

  return (
    <nav className="absolute inset-0 z-8 pointer-events-none">
      {resources.map(({ link, name, alias }, i) => {
        const delay = ANIMATION_DELAYS[i];
        return (
          <div
            key={alias}
            className={`orbit ${alias} absolute top-1/2 left-1/2`}
            style={{ animationDelay: delay }}
          >
            <NavLink
              to={link}
              prefetch="intent"
              className="planet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                handleClick(e, link);
              }}
            >
              <span className="planet-circle block rounded-full bg-center bg-cover shadow-[0_0_8px_rgba(255,255,255,0.35)]"></span>
              <span
                className="planet-label block mt-1 text-white text-xs whitespace-nowrap"
                style={{ animationDelay: delay }}
              >
                {name}
              </span>
            </NavLink>
          </div>
        );
      })}

      {phase !== "done" && (
        <Loading
          phase={phase === "in" ? "in" : "out"}
          onInDone={handleInDone}
          onOutDone={handleOutDone}
        />
      )}
    </nav>
  );
}
