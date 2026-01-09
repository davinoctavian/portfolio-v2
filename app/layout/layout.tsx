import { Outlet } from "react-router";
import "../app.css";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#03040d] text-white">
      {/* Sun */}
      <div
        className="
          sun absolute top-1/2 left-1/2
          w-[clamp(100px,15vw,200px)] h-[clamp(100px,15vw,200px)]
          rounded-full
          bg-[url('/textures/sun.webp')] bg-cover bg-center
          shadow-[0_0_80px_rgba(255,200,100,0.8)]
        "
      ></div>

      {/* Nebula */}
      <div className="nebula absolute inset-0 mix-blend-screen"></div>

      {/* Star layers */}
      <div className="stars stars-1 absolute inset-0 pointer-events-none"></div>
      <div className="stars stars-2 absolute inset-0 pointer-events-none"></div>
      <div className="stars stars-3 absolute inset-0 pointer-events-none"></div>
      <div className="stars stars-4 absolute inset-0 pointer-events-none"></div>

      {/* Page content */}
      <main className="z-10 max-w-4xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
