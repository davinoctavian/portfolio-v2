import { useState } from "react";
import { Loading } from "../loading/loading";
import { useNavigate } from "react-router";
import type { Route } from "./+types/project";
import crudAngular from "../assets/videos/crud-angular.mp4";
import crudReactJsonServer from "../assets/videos/crud-react-jsonserver.mp4";
import cssAnimation from "../assets/videos/css-animation.mp4";
import nextjsGetGitRepo from "../assets/videos/nextjs-get-gitrepo.mp4";
import reactReduxWithLogin from "../assets/videos/react-redux-with-login.mp4";
import shoeStoreReactJsonServer from "../assets/videos/shoeStore-react-jsonserver.mp4";
import simpleReactCdn from "../assets/videos/simple-react-cdn.mp4";
import shoeStoreAngular from "../assets/videos/shoeStore-angular-typescript.mp4";
import listPokemonAngular from "../assets/videos/list-pokemon-angular.mp4";
import molaTv from "../assets/videos/molatv.mp4";
import VideoGalleryModal from "../components/VideoGalleryModal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project Davin Octavian" },
    {
      name: "description",
      content: "This page contain Davin Octavian Past Project",
    },
  ];
}

export default function Project() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [datas, setDatas] = useState<{ title: string; src: string }[]>([]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const projects = [
    {
      title: "Personal Project",
      company: "Self‑Learning",
      description: "Mini projects I created to learn programming languages",
      language: ["React", "Angular", "Vue", "Next", "TypeScript"],
      tools: [
        "Visual Studio",
        "Visual Studio Code",
        "SQL Server Management Studio",
        "Gitlab",
        "Github",
      ],
      tasks: [], // optional, you can leave empty if not needed
      links: [
        {
          url: "https://gitlab.com/users/davinoctavian/projects",
          label: "Gitlab",
        },
        {
          url: "https://github.com/davinoctavian?tab=repositories",
          label: "Github",
        },
      ],
      gallery: "personal", // enables Gallery button
    },
    {
      title: "Portal Ideku",
      company: "Ide Inovasi Nusantara",
      language: ["Angular 14"],
      tools: [
        "Visual Studio Code",
        "Github",
        "Slack",
        "Jira",
        "Figma",
        "BitBucket",
        "Asana",
      ],
      tasks: ["Add New Feature", "Fixing", "Enhance", "Testing"],
      link: { url: "https://portal.ideku.io", label: "Ideku Portal" },
    },
    {
      title: "Portal",
      company: "Usaha Kreatif Indonesia",
      language: ["Angular with Devextreme"],
      tools: [
        "Visual Studio Code",
        "Github",
        "Discord",
        "Jira",
        "Figma",
        "Lambda Test",
        "Amazon AWS",
        "Vercel",
      ],
      tasks: [
        "Initialize Project",
        "Add New Feature",
        "Fixing",
        "Enhance",
        "Testing",
        "Deploy",
      ],
      link: { url: "https://portal.bitzaro.com/", label: "Portal" },
    },
    {
      title: "Onramp",
      company: "Usaha Kreatif Indonesia",
      language: ["Angular"],
      tools: [
        "Visual Studio Code",
        "Github",
        "Discord",
        "Jira",
        "Figma",
        "Lambda Test",
        "Amazon AWS",
        "Vercel",
      ],
      tasks: [
        "Initialize Project",
        "Add New Feature",
        "Fixing",
        "Enhance",
        "Testing",
        "Deploy",
      ],
      link: { url: "https://onramp.bitzaro.com/", label: "Onramp" },
    },
    {
      title: "Offramp",
      company: "Usaha Kreatif Indonesia",
      language: ["Angular"],
      tools: [
        "Visual Studio Code",
        "Github",
        "Discord",
        "Jira",
        "Figma",
        "Lambda Test",
        "Amazon AWS",
        "Vercel",
      ],
      tasks: [
        "Initialize Project",
        "Add New Feature",
        "Fixing",
        "Enhance",
        "Testing",
        "Deploy",
      ],
      link: { url: "https://offramp.bitzaro.com/", label: "Offramp" },
    },
    {
      title: "Mola.tv",
      company: "Global Media Visual",
      language: ["React"],
      tools: [
        "Visual Studio Code",
        "Gitlab",
        "Slack",
        "Wrike",
        "Jira",
        "Figma",
      ],
      tasks: ["Add New Feature", "Fixing", "Enhance", "Testing"],
      link: { url: "https://mola.tv/", label: "Mola" },
      gallery: "mola",
    },
    {
      title: "Mega Monitoring",
      company: "Qwerty Aplikasi Inovasi",
      language: ["React"],
      tools: ["Visual Studio Code", "Gitlab", "Team City"],
      tasks: ["Make from scratch", "Fixing", "Testing", "Deploy"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "Qontact Agent",
      company: "Qwerty Aplikasi Inovasi",
      language: ["Angular"],
      tools: ["Visual Studio Code", "Gitlab", "Team City"],
      tasks: ["Make from scratch", "Fixing", "Testing", "Deploy"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "Qontact CRM",
      company: "Qwerty Aplikasi Inovasi",
      language: ["Angular"],
      tools: ["Visual Studio Code", "Gitlab", "Team City"],
      tasks: ["Add New Feature", "Enhance", "Fixing", "Testing", "Deploy"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "DMS",
      company: "Indocyber Global Teknologi",
      language: ["C#"],
      tools: ["Visual Studio", "SQL Server Management Studio"],
      tasks: ["Design Workflow", "Make Master Menu"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "External Contractor",
      company: "Indocyber Global Teknologi",
      language: ["C#"],
      tools: ["Visual Studio", "SQL Server Management Studio"],
      tasks: ["Add New Feature", "Enhance", "Fixing", "Testing"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "SLIK",
      company: "Indocyber Global Teknologi",
      language: ["C#"],
      tools: ["Visual Studio", "SQL Server Management Studio"],
      tasks: ["Add New Feature", "Enhance", "Fixing", "Testing"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "Insurance Claim",
      company: "Indocyber Global Teknologi",
      language: ["C#"],
      tools: ["Visual Studio", "SQL Server Management Studio"],
      tasks: ["Add New Feature", "Enhance", "Fixing", "Testing"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "Bridging",
      company: "Indocyber Global Teknologi",
      language: ["C#"],
      tools: ["Visual Studio", "SQL Server Management Studio"],
      tasks: ["Enhance", "Fixing", "Testing"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
    {
      title: "Starbridge",
      company: "Indocyber Global Teknologi",
      language: ["C#"],
      tools: ["Visual Studio", "SQL Server Management Studio"],
      tasks: ["Add New Feature", "Learning"],
      link: { url: "", label: "Didn't Have Access Anymore" },
    },
  ];

  const handleGalleryClick = (param: string) => {
    if (param === "personal") {
      const dataImage = [
        { title: "Simple React from CDN Link", src: simpleReactCdn },
        { title: "CRUD React with Json Server", src: crudReactJsonServer },
        {
          title: "React Filter with Json Server",
          src: shoeStoreReactJsonServer,
        },
        { title: "React Redux with Login", src: reactReduxWithLogin },
        { title: "CRUD Angular", src: crudAngular },
        { title: "NextJs Get Git Repository", src: nextjsGetGitRepo },
        { title: "Angular-Typescript shoe store", src: shoeStoreAngular },
        { title: "Angular List Pokemon", src: listPokemonAngular },
        { title: "Animation with CSS", src: cssAnimation },
      ];
      setDatas(dataImage);
    }
    if (param === "mola") {
      const dataImage = [{ title: "mola.tv", src: molaTv }];
      setDatas(dataImage);
    }
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
    setDatas([]);
  };

  return (
    <div
      className="
        relative min-h-screen w-full m-0 p-10
        flex flex-col items-center justify-center
        bg-[url('/textures/hd_mars.webp')] bg-cover bg-center menu-panel"
    >
      <div
        className="
          relative z-10 w-full h-full
          bg-[rgba(25,36,37,0.54)]
          p-6 pb-10 rounded-xl
          text-[#88fffe] text-center
          shadow-inner shadow-cyan-300/30
          overflow-y-auto
        "
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          onClose={() => handleCloseGallery()}
          videos={datas}
        />
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

function ProjectCard({
  project,
  onGalleryClick,
}: {
  project: any;
  onGalleryClick: (param: string) => void;
}) {
  return (
    <div
      className="
        bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400
        shadow-lg shadow-cyan-300/40
        rounded-xl p-6 transition-transform transform hover:scale-[1.02]
        hover:shadow-cyan-400/60
      "
    >
      {/* Title */}
      <h3 className="text-black text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-800 italic mb-4">
        {project.description
          ? project.description
          : `This project when I worked at ${project.company}`}
      </p>

      {/* Divider */}
      <hr className="border-t border-cyan-400 mb-4" />

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-black">
        <div>
          <h4 className="font-semibold text-cyan-700">Programming Languages</h4>
          <ul className="list-disc list-inside">
            {project.language.map((lang: string) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cyan-700">Tools</h4>
          <ul className="list-disc list-inside">
            {project.tools.map((tool: string) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        {project.tasks.length > 0 && (
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-cyan-700">Tasks</h4>
            <ul className="list-disc list-inside grid grid-cols-2 gap-x-6">
              {project.tasks.map((task: string) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="sm:col-span-2">
          <h4 className="font-semibold text-cyan-700">Links</h4>
          <div className="flex flex-wrap gap-3 mt-2">
            {project.links
              ? project.links.map((link: any) =>
                  link.url ? (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-lg bg-black text-yellow-300 hover:bg-cyan-700 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      className="px-3 py-1 rounded-lg bg-gray-300 text-gray-700 cursor-not-allowed"
                    >
                      {link.label}
                    </span>
                  )
                )
              : project.link &&
                (project.link.url ? (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-lg bg-black text-yellow-300 hover:bg-cyan-700 hover:text-white transition"
                  >
                    {project.link.label}
                  </a>
                ) : (
                  <span className="px-3 py-1 rounded-lg bg-gray-300 text-gray-700 cursor-not-allowed">
                    {project.link.label}
                  </span>
                ))}

            {project.gallery && (
              <button
                className="px-3 py-1 rounded-lg bg-black text-yellow-300 hover:bg-cyan-700 hover:text-white transition cursor-pointer"
                onClick={() => onGalleryClick(project.gallery)}
              >
                Gallery
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
