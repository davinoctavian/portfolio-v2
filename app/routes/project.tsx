import { useState } from "react";
import { PageShell } from "../components/PageShell";
import type { Route } from "./+types/project";
import VideoGalleryModal from "../components/VideoGalleryModal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects · Davin Octavian" },
    { name: "description", content: "Projects by Davin Octavian" },
  ];
}

import crudAngular from "../assets/videos/crud-angular.mp4?url";
import crudReactJsonServer from "../assets/videos/crud-react-jsonserver.mp4?url";
import cssAnimation from "../assets/videos/css-animation.mp4?url";
import nextjsGetGitRepo from "../assets/videos/nextjs-get-gitrepo.mp4?url";
import reactReduxWithLogin from "../assets/videos/react-redux-with-login.mp4?url";
import shoeStoreReactJsonServer from "../assets/videos/shoeStore-react-jsonserver.mp4?url";
import simpleReactCdn from "../assets/videos/simple-react-cdn.mp4?url";
import shoeStoreAngular from "../assets/videos/shoeStore-angular-typescript.mp4?url";
import listPokemonAngular from "../assets/videos/list-pokemon-angular.mp4?url";
import molaTv from "../assets/videos/molatv.mp4?url";
import reactVitePwaGameTtt from "../assets/videos/react-vite-pwa-game-ttt.mp4?url";
import internetPackageViteJsonServer from "../assets/videos/internet-package-vite-json-server.mp4?url";
import taskManagerVitePwa from "../assets/videos/task-manager-vite-pwa.mp4?url";
import pulseReminderViteCapacitor from "../assets/videos/pulse-reminder-vite-capacitor.mp4?url";
import nextExpenseTracking from "../assets/videos/next-expense-tracking.mp4?url";

const GALLERIES: Record<string, { title: string; src: string }[]> = {
  personal: [
    { title: "Simple React from CDN", src: simpleReactCdn },
    { title: "CRUD React + Json Server", src: crudReactJsonServer },
    { title: "Shoe Store React", src: shoeStoreReactJsonServer },
    { title: "React Redux with Login", src: reactReduxWithLogin },
    { title: "CRUD Angular", src: crudAngular },
    { title: "Next.js Get Git Repo", src: nextjsGetGitRepo },
    { title: "Shoe Store Angular", src: shoeStoreAngular },
    { title: "Angular List Pokémon", src: listPokemonAngular },
    { title: "CSS Animations", src: cssAnimation },
    { title: "Tic Tac Toe PWA", src: reactVitePwaGameTtt },
    {
      title: "Internet Package Vite + Json Server",
      src: internetPackageViteJsonServer,
    },
    { title: "Task Manager PWA", src: taskManagerVitePwa },
    { title: "Pulse Reminder + Capacitor", src: pulseReminderViteCapacitor },
    { title: "Next.js Expense Tracking", src: nextExpenseTracking },
  ],
  mola: [{ title: "mola.tv", src: molaTv }],
};

type LinkDef = { url: string; label: string };
type Project = {
  title: string;
  company: string;
  description?: string;
  language: string[];
  tools: string[];
  tasks?: string[];
  link?: LinkDef;
  links?: LinkDef[];
  gallery?: string;
};

const projects: Project[] = [
  {
    title: "Personal Project",
    company: "Self‑Learning",
    description: "Mini projects built to explore frameworks and languages.",
    language: ["React", "Angular", "Vue", "Next.js", "TypeScript"],
    tools: ["VS Code", "VS", "SSMS", "GitLab", "GitHub"],
    links: [
      {
        url: "https://gitlab.com/users/davinoctavian/projects",
        label: "GitLab",
      },
      {
        url: "https://github.com/davinoctavian?tab=repositories",
        label: "GitHub",
      },
    ],
    gallery: "personal",
  },
  {
    title: "Portal Ideku",
    company: "Ide Inovasi Nusantara",
    language: ["Angular 14"],
    tools: [
      "VS Code",
      "GitHub",
      "Slack",
      "Jira",
      "Figma",
      "BitBucket",
      "Asana",
    ],
    tasks: ["New Feature", "Bug Fix", "Enhance", "Testing"],
    link: { url: "https://portal.ideku.io", label: "Visit" },
  },
  {
    title: "Portal",
    company: "Usaha Kreatif Indonesia",
    language: ["Angular + Devextreme"],
    tools: ["VS Code", "GitHub", "Discord", "Jira", "Figma", "AWS", "Vercel"],
    tasks: ["Init", "New Feature", "Bug Fix", "Enhance", "Deploy"],
    link: { url: "https://portal.bitzaro.com/", label: "Visit" },
  },
  {
    title: "Onramp",
    company: "Usaha Kreatif Indonesia",
    language: ["Angular"],
    tools: ["VS Code", "GitHub", "Discord", "Jira", "Figma", "AWS", "Vercel"],
    tasks: ["Init", "New Feature", "Bug Fix", "Deploy"],
    link: { url: "https://onramp.bitzaro.com/", label: "Visit" },
  },
  {
    title: "Offramp",
    company: "Usaha Kreatif Indonesia",
    language: ["Angular"],
    tools: ["VS Code", "GitHub", "Discord", "Jira", "Figma", "AWS", "Vercel"],
    tasks: ["Init", "New Feature", "Bug Fix", "Deploy"],
    link: { url: "https://offramp.bitzaro.com/", label: "Visit" },
  },
  {
    title: "mola.tv",
    company: "Global Media Visual",
    language: ["React"],
    tools: ["VS Code", "GitLab", "Slack", "Wrike", "Jira", "Figma"],
    tasks: ["New Feature", "Bug Fix", "Enhance", "Testing"],
    link: { url: "https://mola.tv/", label: "Visit" },
    gallery: "mola",
  },
  {
    title: "Mega Monitoring",
    company: "Qwerty Aplikasi Inovasi",
    language: ["React"],
    tools: ["VS Code", "GitLab", "TeamCity"],
    tasks: ["From Scratch", "Bug Fix", "Testing", "Deploy"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "Qontact Agent",
    company: "Qwerty Aplikasi Inovasi",
    language: ["Angular"],
    tools: ["VS Code", "GitLab", "TeamCity"],
    tasks: ["From Scratch", "Bug Fix", "Testing", "Deploy"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "Qontact CRM",
    company: "Qwerty Aplikasi Inovasi",
    language: ["Angular"],
    tools: ["VS Code", "GitLab", "TeamCity"],
    tasks: ["New Feature", "Enhance", "Bug Fix", "Deploy"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "DMS",
    company: "Indocyber Global Teknologi",
    language: ["C#"],
    tools: ["Visual Studio", "SQL Server"],
    tasks: ["Workflow Design", "Master Menu"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "External Contractor",
    company: "Indocyber Global Teknologi",
    language: ["C#"],
    tools: ["Visual Studio", "SQL Server"],
    tasks: ["New Feature", "Enhance", "Bug Fix"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "SLIK",
    company: "Indocyber Global Teknologi",
    language: ["C#"],
    tools: ["Visual Studio", "SQL Server"],
    tasks: ["New Feature", "Enhance", "Bug Fix"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "Insurance Claim",
    company: "Indocyber Global Teknologi",
    language: ["C#"],
    tools: ["Visual Studio", "SQL Server"],
    tasks: ["New Feature", "Enhance", "Bug Fix"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "Bridging",
    company: "Indocyber Global Teknologi",
    language: ["C#"],
    tools: ["Visual Studio", "SQL Server"],
    tasks: ["Enhance", "Bug Fix"],
    link: { url: "", label: "No Access" },
  },
  {
    title: "Starbridge",
    company: "Indocyber Global Teknologi",
    language: ["C#"],
    tools: ["Visual Studio", "SQL Server"],
    tasks: ["New Feature", "Learning"],
    link: { url: "", label: "No Access" },
  },
];

export default function Project() {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [galleryVideos, setGalleryVideos] = useState<
    { title: string; src: string }[]
  >([]);

  const handleGalleryClick = (key: string) => {
    const videos = GALLERIES[key];
    if (videos) {
      setGalleryVideos(videos);
      setGalleryOpen(true);
    }
  };

  return (
    <PageShell
      bgClass="bg-[url('/textures/hd_mars.webp')] bg-cover bg-center"
      title="Mars · Projects"
      hideBack={isGalleryOpen}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            project={p}
            onGalleryClick={handleGalleryClick}
          />
        ))}
      </div>

      <VideoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => {
          setGalleryOpen(false);
          setGalleryVideos([]);
        }}
        videos={galleryVideos}
      />
    </PageShell>
  );
}

function ProjectCard({
  project,
  onGalleryClick,
}: {
  project: Project;
  onGalleryClick: (k: string) => void;
}) {
  const allLinks: (
    | { type: "link"; data: LinkDef }
    | { type: "gallery"; key: string }
  )[] = [];
  if (project.links)
    project.links.forEach((l) => allLinks.push({ type: "link", data: l }));
  else if (project.link) allLinks.push({ type: "link", data: project.link });
  if (project.gallery) allLinks.push({ type: "gallery", key: project.gallery });

  return (
    <div className="project-card p-5 flex flex-col gap-4">
      <div>
        <p className="project-card-company">{project.company}</p>
        <h3 className="project-card-title mt-0.5">{project.title}</h3>
        {project.description && (
          <p className="text-[rgba(255,255,255,.45)] text-xs mt-1.5 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.language.map((l) => (
          <span key={l} className="tag">
            {l}
          </span>
        ))}
      </div>

      {project.tasks && project.tasks.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tasks.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full border border-[rgba(255,255,255,.1)] text-[rgba(255,255,255,.4)]"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex-1" />

      <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(0,240,255,.08)]">
        {allLinks.map((item, i) => {
          if (item.type === "gallery") {
            return (
              <button
                key="gallery"
                className="project-link"
                onClick={() => onGalleryClick(item.key)}
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Videos
              </button>
            );
          }
          const { url, label } = item.data;
          return url ? (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              {label}
            </a>
          ) : (
            <span key={i} className="project-link disabled">
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
