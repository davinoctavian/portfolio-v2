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
  const [isModal, setModal] = useState(false);
  const [datas, setDatas] = useState<{ name: string; link: string }[]>([]);

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
        { name: "Simple React from CDN Link", link: simpleReactCdn },
        { name: "CRUD React with Json Server", link: crudReactJsonServer },
        {
          name: "React Filter with Json Server",
          link: shoeStoreReactJsonServer,
        },
        { name: "React Redux with Login", link: reactReduxWithLogin },
        { name: "CRUD Angular", link: crudAngular },
        { name: "NextJs Get Git Repository", link: nextjsGetGitRepo },
        { name: "Angular-Typescript shoe store", link: shoeStoreAngular },
        { name: "Angular List Pokemon", link: listPokemonAngular },
        { name: "Animation with CSS", link: cssAnimation },
      ];
      setDatas(dataImage);
    }
    if (param === "mola") {
      const dataImage = [{ name: "mola.tv", link: molaTv }];
      setDatas(dataImage);
    }
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
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
        {/* <Modal show={isModal} handleClose={() => handleCloseModal()}> */}
        {datas?.map((data, index) => {
          return (
            <fieldset key={index} className="mb-2">
              <legend>{data.name}</legend>
              <video width="100%" height="100%" controls>
                <source src={data.link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </fieldset>
          );
        })}
        {/* </Modal> */}
        <div className="space-y-4">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              onGalleryClick={handleGalleryClick}
            />
          ))}
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

function ProjectCard({
  project,
  onGalleryClick,
}: {
  project: any;
  onGalleryClick: (param: string) => void;
}) {
  return (
    <div className="p-2 shadow-inner shadow-cyan-300/30 bg-[rgb(253,253,33)]">
      <h3 className="text-[#000000]">{project.title}</h3>
      <hr />
      <div className="text-[#000000] text-left">
        <p>
          {project.description
            ? project.description
            : `This Project when I work on ${project.company}`}
        </p>
        <ol>
          <li>
            Programming Language
            <ul>
              {project.language.map((lang: string) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </li>
          <li>
            Tools
            <ul>
              {project.tools.map((tool: string) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </li>
          {project.tasks.length > 0 && (
            <li>
              Tasks
              <ul>
                {project.tasks.map((task: string) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </li>
          )}
          <li>
            Link
            <ul>
              {project.links ? (
                project.links.map((link: any) =>
                  link.url ? (
                    <li key={link.label}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>{link.label}</li>
                  )
                )
              ) : (
                <li>{project.link.label}</li>
              )}
              {project.gallery && (
                <li>
                  <button
                    className="cursor-pointer bg-[#000000] text-[#ffffff] px-2 py-1 rounded"
                    onClick={() => onGalleryClick(project.gallery)}
                  >
                    Gallery
                  </button>
                </li>
              )}
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
