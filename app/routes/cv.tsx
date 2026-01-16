import { useEffect, useState } from "react";
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

  const [pdfSupported, setPdfSupported] = useState(true);

  useEffect(() => {
    const embed = document.createElement("embed");
    embed.type = "application/pdf";
    setPdfSupported(embed.type === "application/pdf");
  }, []);

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
          {pdfSupported ? (
            <iframe
              src="/documents/CV_Davin_Octavian.pdf"
              className="w-full h-full rounded-lg"
              style={{ border: "none" }}
            ></iframe>
          ) : (
            <p className="text-center mt-4">
              Your browser doesn’t support inline PDF viewing.{" "}
              <a
                href="/documents/CV_Davin_Octavian.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Open CV
              </a>
            </p>
          )}
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
