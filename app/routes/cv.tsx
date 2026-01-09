import { useState } from "react";
import { Loading } from "../loading/loading";
import { useNavigate } from "react-router";
import type { Route } from "./+types/cv";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV Davin Octavian" },
    {
      name: "description",
      content: "This page contain Davin Octavian CV",
    },
  ];
}

export default function Cv() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div
      className="
        relative min-h-screen w-full m-0 p-10
        flex flex-col items-center justify-center
        bg-[url('/textures/hd_jupiter.webp')] bg-cover bg-center menu-panel"
    >
      <div
        className="
          relative z-10 w-full h-full
          bg-[rgba(25,36,37,0.41)]
          p-6 pb-10 rounded-xl
          text-[#88fffe] text-center font-orbitron
          shadow-inner shadow-cyan-300/30
        "
      >
        ini untuk CV
        <p>CV</p>
      </div>
      <div
        onClick={handleClick}
        className="
        font-orbitron
          relative z-20 -top-6
          text-center px-6 py-3 rounded-xl
          bg-[rgba(25,36,37,0.83)]
          shadow-inner shadow-cyan-300/30
          cursor-pointer
        "
      >
        Close
      </div>
      {loading && <Loading />}
    </div>
  );
}
