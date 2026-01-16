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
          bg-[rgba(25,36,37,0.54)]
          p-6 pb-10 rounded-xl
          text-[#88fffe] text-center
          shadow-inner shadow-cyan-300/30 contents overflow-auto
        "
      >
        <div className="w-full h-[600px] rounded-lg">
          <object
            data="/documents/CV_Davin_Octavian.pdf"
            type="application/pdf"
            style={{ width: "100%", height: "100%", border: "none" }}
          >
            <p>
              Your browser may not support inline PDFs.{" "}
              <a
                href="/documents/CV_Davin_Octavian.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block mt-2 px-4 py-2
                  bg-cyan-600 hover:bg-cyan-700
                  text-white font-semibold rounded-lg
                  shadow-md transition-colors
                "
              >
                Download the CV
              </a>
            </p>
          </object>
        </div>
      </div>
      <div
        onClick={handleClick}
        className="
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
