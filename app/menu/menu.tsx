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
    if (phase !== "done") return;
    pendingLink.current = link;
    setPhase("in");
  };

  const handleInDone = () => {
    setPhase("waiting");
    if (pendingLink.current) navigate(pendingLink.current);
  };

  useEffect(() => {
    if (phase === "waiting" && navigation.state === "idle") setPhase("out");
  }, [navigation.state, phase]);

  const handleOutDone = () => {
    setPhase("done");
    pendingLink.current = null;
  };

  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none select-none"
        style={{ marginTop: "clamp(60px, 10vw, 110px)" }}
      >
        <p className="text-[rgba(255,255,255,.35)] text-[10px] tracking-[.3em] uppercase">
          Select a planet
        </p>
      </div>

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
                <span className="planet-circle block rounded-full bg-center bg-cover" />
                <span
                  className="planet-label"
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
    </>
  );
}
