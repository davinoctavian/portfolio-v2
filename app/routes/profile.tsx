import { PageShell } from "../components/PageShell";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile Davin Octavian" },
    {
      name: "description",
      content: "This page contain Davin Octavian Profile",
    },
  ];
}

export default function Profile() {
  return (
    <PageShell className="bg-[url('/textures/hd_mercury.webp')] bg-cover bg-center">
      <img
        src="/images/pasphoto.jpg"
        alt="profile"
        className="mx-auto mb-6 max-w-[150px] rounded-lg shadow-lg"
      />
      <div className="space-y-4 mx-auto w-full max-w-md">
        {[
          { label: "Name", value: "Davin Octavian" },
          { label: "Gender", value: "Male" },
          {
            label: "Place and Date of Birth",
            value: "Tello Island, 13 Oct 1992",
          },
          { label: "Email", value: "davinoctavian@gmail.com" },
          { label: "Phone", value: "+6281264527452" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 text-sm sm:text-base"
          >
            <div className="font-semibold text-left sm:w-48">{label}</div>
            <div className="text-right sm:flex-1 break-words">{value}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
