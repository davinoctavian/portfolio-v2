import { useState } from "react";
import { Loading } from "../loading/loading";
import { useNavigate } from "react-router";
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
        bg-[url('/textures/hd_mercury.webp')] bg-cover bg-center menu-panel"
    >
      <div
        className="
          relative z-10 w-full h-full
          bg-[rgba(25,36,37,0.54)]
          p-6 pb-10 rounded-xl
          text-[#88fffe] text-center
          shadow-inner shadow-cyan-300/30
          flex flex-col items-center
          contents overflow-y-auto
        "
      >
        <img
          src="/images/pasphoto.jpg"
          alt="profile"
          className="mx-auto mb-6 max-w-[150px] rounded-lg shadow-lg"
        />
        <div className="space-y-4 w-full max-w-md">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-1 sm:gap-4
                      text-sm sm:text-base
              "
          >
            <div className="font-semibold text-left sm:w-48">Name</div>
            <div className="text-right sm:flex-1 break-words">
              Davin Octavian
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-1 sm:gap-4
                      text-sm sm:text-base
              "
          >
            <div className="font-semibold text-left sm:w-48">Gender</div>
            <div className="text-right sm:flex-1 break-words">Male</div>
          </div>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-1 sm:gap-4
                      text-sm sm:text-base
              "
          >
            <div className="font-semibold text-left sm:w-48">
              Place and Date of Birth
            </div>
            <div className="text-right sm:flex-1 break-words">
              Tello Island, 13 October 1992
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-1 sm:gap-4
                      text-sm sm:text-base
              "
          >
            <div className="font-semibold text-left sm:w-48">Email</div>
            <div className="text-right sm:flex-1 break-words">
              davinoctavian@gmail.com
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-1 sm:gap-4
                      text-sm sm:text-base
              "
          >
            <div className="font-semibold text-left sm:w-48">Phone</div>
            <div className="text-right sm:flex-1 break-words">
              +6281264527452
            </div>
          </div>
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
