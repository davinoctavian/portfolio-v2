import { Outlet } from "react-router";
import "../app.css";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#03040d] text-white">
      <div
        className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[clamp(80px,12vw,160px)] h-[clamp(80px,12vw,160px)]
          rounded-full
          bg-[url('/textures/sun.webp')] bg-cover bg-center
          shadow-[0_0_60px_rgba(255,200,100,.7),0_0_120px_rgba(255,160,60,.3)]"
        style={{ willChange: "transform" }}
      />

      <div className="nebula absolute inset-0 mix-blend-screen" style={{ willChange: "transform" }} />

      <div className="stars stars-1 absolute inset-0 pointer-events-none" />
      <div className="stars stars-2 absolute inset-0 pointer-events-none" />
      <div className="stars stars-3 absolute inset-0 pointer-events-none" />
      <div className="stars stars-4 absolute inset-0 pointer-events-none" />

      <main className="relative z-10 w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}