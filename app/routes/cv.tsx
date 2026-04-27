import { PageShell } from "../components/PageShell";
import type { Route } from "./+types/cv";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV Davin Octavian" },
    { name: "description", content: "This page contain Davin Octavian CV" },
  ];
}

export default function Cv() {
  return (
    <PageShell className="bg-[url('/textures/hd_jupiter.webp')] bg-cover bg-center">
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
              className="inline-block mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Download the CV
            </a>
          </p>
        </object>
      </div>
    </PageShell>
  );
}
