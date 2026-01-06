import { Outlet } from "react-router";
import "./layout.css";

export default function Layout() {
  return (
    <div className="sky-root text-white">
      <div className="nebula"></div>
      {/* Star layers */}
      <div className="stars stars-1"></div>
      <div className="stars stars-2"></div>
      <div className="stars stars-3"></div>
      <div className="stars stars-4"></div>

      {/* Page content */}
      <main className="relative z-10 max-w-4xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
