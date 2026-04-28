import { PageShell } from "../components/PageShell";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile · Davin Octavian" },
    { name: "description", content: "Davin Octavian — Frontend Engineer" },
  ];
}

const info = [
  { label: "Full Name", value: "Davin Octavian" },
  { label: "Gender", value: "Male" },
  { label: "Date of Birth", value: "13 October 1992" },
  { label: "Birthplace", value: "Tello Island" },
  { label: "Email", value: "davinoctavian@gmail.com" },
  { label: "Phone", value: "+62 812 6452 7452" },
];

export default function Profile() {
  return (
    <PageShell
      bgClass="bg-[url('/textures/hd_mercury.webp')] bg-cover bg-center"
      title="Mercury · Profile"
    >
      <div className="glass-panel p-8 sm:p-10 flex flex-col sm:flex-row gap-10 items-start">
        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          <img
            src="/images/pasphoto.jpg"
            alt="Davin Octavian"
            className="profile-photo w-36 h-auto sm:w-44"
          />
          <div className="text-center">
            <p className="text-white font-bold text-lg tracking-wide">
              Davin Octavian
            </p>
            <p className="section-title text-xs mt-1">
              Senior Frontend Engineer
            </p>
          </div>
        </div>

        <div className="flex-1 w-full">
          {info.map(({ label, value }) => (
            <div key={label} className="profile-row">
              <span className="profile-label">{label}</span>
              <span className="profile-value">{value}</span>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://github.com/davinoctavian"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://gitlab.com/davinoctavian"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
              </svg>
              GitLab
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
