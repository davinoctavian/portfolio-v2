import type { Route } from "./+types/home";
import { Menu } from "../menu/menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Davin Octavian — Frontend Engineer" },
    { name: "description", content: "Portfolio of Davin Octavian, Senior Frontend Engineer" },
  ];
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none select-none"
        style={{ marginTop: "clamp(-80px, -8vw, -55px)" }}>
        <h1
          className="font-bold tracking-widest text-white"
          style={{
            fontSize: "clamp(.85rem, 2vw, 1.3rem)",
            textShadow: "0 0 30px rgba(0,240,255,.5), 0 0 60px rgba(0,240,255,.2)",
            letterSpacing: ".22em",
          }}
        >
          DAVIN OCTAVIAN
        </h1>
        <p
          className="mt-1"
          style={{
            fontSize: "clamp(.6rem, 1.1vw, .8rem)",
            color: "rgba(0,240,255,.65)",
            letterSpacing: ".3em",
            textTransform: "uppercase",
          }}
        >
          Frontend Engineer
        </p>
      </div>

      <Menu />
    </div>
  );
}