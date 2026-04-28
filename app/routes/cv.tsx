import { PageShell } from "../components/PageShell";
import type { Route } from "./+types/cv";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV · Davin Octavian" },
    { name: "description", content: "CV of Davin Octavian" },
  ];
}

export default function Cv() {
  return (
    <PageShell
      bgClass="bg-[url('/textures/hd_jupiter.webp')] bg-cover bg-center"
      title="Jupiter · CV"
    >
      <div className="glass-panel overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(0,240,255,.1)]">
          <p className="text-white text-sm font-semibold tracking-wide">CV_Davin_Octavian.pdf</p>
          <a
            href="/documents/CV_Davin_Octavian.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download
          </a>
        </div>
        <div className="cv-frame-wrap">
          <object
            data="/documents/CV_Davin_Octavian.pdf"
            type="application/pdf"
            className="w-full h-[70vh]"
          >
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-[rgba(255,255,255,.5)]">
              <p className="text-sm">Your browser doesn't support inline PDFs.</p>
              <a href="/documents/CV_Davin_Octavian.pdf" target="_blank" rel="noreferrer" className="project-link">
                Open CV
              </a>
            </div>
          </object>
        </div>
      </div>
    </PageShell>
  );
}